export function createVisitor(name, age, ticketId) {
  return {
    name,
    age,
    ticketId
  };
}

export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
  console.log(tickets.ticketId);
  if (!tickets.hasOwnProperty(ticketId)) {
    return 'unknown ticket id';
  } else if (tickets[ticketId] === null) {
    return 'not sold';
  } else {
    return `sold to ${tickets[ticketId]}`;
  }
}

export function simpleTicketStatus(tickets, ticketId) {
  return tickets[ticketId] ?? 'invalid ticket !!!';

}

export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
