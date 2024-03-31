import { ResponseCodes } from "./../../constants/enums/commonResponse.enum";
import { Request, Response } from "express";


export function SuccessResponse(res: Response, data: any, message?: string) {
    res.status(ResponseCodes.SUCCESS).json({
        message: message ?? 'SUCCESS',
        status: ResponseCodes.SUCCESS,
        data
    })
}

export function InternalServerErrorResponse(res: Response, message?: string) {
    res.status(ResponseCodes.SUCCESS).json({
        message: message ?? 'INTERNAL SERVER ERROR',
        status: ResponseCodes.INTERNAL_SERVER_ERROR,
    })
}

export function UnProcessableEntityResponse(res: Response, message?: string) {
    res.status(ResponseCodes.SUCCESS).json({
        message: message ?? 'BAD REQUEST',
        status: ResponseCodes.UNPROCESSABLE_ENTITY,
    })
}

export function BadRequestResponse(res: Response, message?: string, info?: any) {
    res.status(ResponseCodes.SUCCESS).json({
        message: message ?? 'BAD REQUEST',
        status: ResponseCodes.BAD_REQUEST,
        info
    })
}
