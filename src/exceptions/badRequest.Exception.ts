import { HttpException } from "@nestjs/common";


export class NewBadRequest extends HttpException {
    constructor(
      message: string,
      statusCode: number
    ){
      super(message, statusCode);
    }
  }