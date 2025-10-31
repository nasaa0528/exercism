export class TranslationService {
  constructor(api) {
    this.api = api;
  }

  free(text) {
    return new Promise((resolve, reject) => {
      this.api.fetch(text)
        .then(result => {
          resolve(result.translation);
        })
        .catch(err => {
          reject(err);
        });
    })
  }

  batch(texts) {
    if (!texts.length) {
      return Promise.reject(new BatchIsEmpty());
    }

    return Promise.all(texts.map(text => this.free(text)))
      .then(values => {
        return values;
      })
      .catch(err => {
        throw err;
      });
  }

  request(text) {
    return new Promise((resolve, reject) => {
      let attempts = 0;

      const tryCall = () => {
        attempts++;

        this.api.request(text, (err) => {
          if (err === undefined) {
            return resolve();
          }

          if (attempts < 3){
            return tryCall();
          }

          return reject(err);
        });
      };

      tryCall();
    });
  }

  premium(text, minimumQuality) {
    return new Promise((resolve, reject) => {
      this.api.fetch(text)
        .then(
          result => {
          if (result.quality >= minimumQuality) {
            resolve(result.translation);
          } else {
            reject(new QualityThresholdNotMet);
          }
        })
        .catch(e => {
          this.request(text).then((requestResponse) => {
            if (requestResponse === undefined) {
              this.api.fetch(text).then(result => {
                if (result.quality >= minimumQuality) {
                  resolve(result.translation);
                } else {
                  reject(new QualityThresholdNotMet);
                }
              });
            } else {
              reject(e);
            }
          }).catch(e => {
            reject(e);
          });
        });
    });
  }
}

export class QualityThresholdNotMet extends Error {
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim(),
    );

    this.text = text;
  }
}

export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim(),
    );
  }
}
