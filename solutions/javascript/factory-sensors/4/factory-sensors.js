export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export const checkHumidityLevel = h => {
  if (h > 70) throw '';
}

export const reportOverheating = t => {
  if (t === null) throw new ArgumentError();
  else if (t> 500) throw new OverheatingError(t);
}

export const monitorTheMachine = actions => {
  try {
    actions.check();
  } catch (e) {
    if (e instanceof ArgumentError) actions.alertDeadSensor();
    else if (e instanceof OverheatingError)
      if (e.temperature > 600) actions.shutdown();
      else actions.alertOverheating();
    else throw e;
  }
}
