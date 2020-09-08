import BaseController from "../utils/BaseController";
import auth0Provider from "@bcwdev/auth0provider";
import { customersService } from "../services/CustomersService";
import { query } from "express";
import { BadRequest } from "../utils/Errors";

export class CustomersController extends BaseController {
  constructor() {
    super("api/customers");
    this.router
      .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
      .get("", this.find)
      .put("/:phoneNumber", this.edit)
      .delete("/:phoneNumber", this.delete);
  }
  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email;
      let data = await customersService.create(req.body);
      if (req.UserInfo) {
        res.send(JSON.stringify(req.UserInfo));
      }
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async find(req, res, next) {
    try {
      let { phoneNumber } = req.query;
      let data = await customersService.find(
        phoneNumber || {},
        req.userInfo.email
      );
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      req.body.phoneNumber = req.body.phone || req.params.phoneNumber;
      console.log(JSON.stringify(req.body.phone));
      let data = await customersService.edit(
        req.params.phoneNumber,
        req.userInfo.email,
        req.body
      );
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let data = await customersService.delete(
        req.params.phoneNumber,
        req.userInfo.email
      );
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
