export class ApiErrors extends Error {
  constructor(name, message, statuscode, body) {
    super(message);
    this.name = name;
    this.statuscode = statuscode;
    this.body = body;
    this.timeStamp = new Date().toISOString();
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      statuscode: this.statuscode,
      timeStamp: this.timeStamp,
    };
  }
  toString() {
    return `[${this.name} (statusCode: ${this.statuscode ?? "N/A"}): ${this.body} ]`;
  }
}
