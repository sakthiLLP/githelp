import express, { Request, Response } from "express";
// import BaseService from "../services/shortservice";
import utils from "../utils/utils"
import BaseService from "../utils/utils";


export default class BaseController {
    static async shorten(req: Request, res: Response) {
    if(!req.body.url)
      return res.status(400).json({message:"URL needed"})
    try {
      const { data, error } = await BaseService.getShortUrl(req.body.url);
      if (error) {
        return res.status(400).json({ message: "Error shortening URL", error });
      }
      return res.status(200).json({ message: "Shortened URL generated!", data });
    } catch (err: any) {
      return res.status(500).json({ message: "Internal server error", error: err.message });
    }
  }
}
