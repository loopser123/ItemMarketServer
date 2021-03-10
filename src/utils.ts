import { NextFunction, Request, Response } from 'express';


export function asyncRoute(
    fn: (req: Request, res: Response, next: NextFunction) => Promise<void> | void
  ) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await fn(req, res, next);
      } catch (err) {
        next(err);
      }
    };
  }