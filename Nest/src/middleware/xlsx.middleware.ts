import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as XLSX from 'xlsx';

import { constants } from '../constants';

@Injectable()
export class XlsxMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const contentType = req.headers['Content-Type'];

    // Check if Request contains an xlsx file
    if (!contentType || !contentType.includes(constants.xlsxMIMEType))
      // If not, just call the next middleware
      next();

    // Convert XLSX to CSV
    const workbook = XLSX.read(req.body);
    const csvOutput = XLSX.utils.sheet_to_csv(workbook.Sheets[0]);

    // Replace Request Body/Headers
    req.headers['Content-Type'] = constants.csvMIMEType;
    req.body = csvOutput;

    // Continue Middleware chain
    next();
  }
}
