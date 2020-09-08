import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CustomersService {
  async create(data) {
    let res = await dbContext.Customer.create(data);
    return res;
  }
  async find(phoneNumQuery, email) {
    let data = await dbContext.Customer.find({
      creatorEmail: email,
      phoneNumber: { $regex: ".*" + phoneNumQuery + ".*" },
    });
    if (!data) {
      throw new BadRequest("No data");
    }
    return data;
  }
  async addPunch(phoneNumber, creatorEmail) {
    let currentCustomer = await this.find(phoneNumber, creatorEmail);
    if (currentCustomer.length !== 1) {
      throw new BadRequest("invalid phone number");
    }
    // @ts-ignore
    let points = currentCustomer[0].points + 1;
    const data = {
      phoneNumber: phoneNumber,
      creatorEmail: creatorEmail,
      points: points,
    };
    let result = await dbContext.Customer.findOneAndUpdate(
      { creatorEmail: creatorEmail, phoneNumber: phoneNumber },
      data
    );
    return result;
  }
  edit(phoneNumber, creatorEmail, data) {
    let result = dbContext.Customer.findOneAndUpdate(
      { creatorEmail: creatorEmail, phoneNumber: phoneNumber },
      data
    );
    if (!result) {
      throw new BadRequest("Invalid id");
    }
    return result;
  }
  delete(phoneNumber, creatorEmail) {
    console.log(phoneNumber + " - " + creatorEmail);
    let data = dbContext.Customer.findOneAndDelete({
      creatorEmail: creatorEmail,
      phoneNumber: phoneNumber,
    });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
}

export const customersService = new CustomersService();
