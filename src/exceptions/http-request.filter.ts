import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpExceptionBody } from "@nestjs/common";
import { Response, Request } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getRequest<Response>();
        const request = ctx.getRequest<Request>();

        const status = exception.getStatus();
        const message = exception.message;

        response.status( status ).json({
            statusCode: status,
            timeStamp: new Date().toISOString(),
            path: request.url,
            message
        })

    }
}