import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CustomersService {
  async create(data) {
    let res = await dbContext.Customer.create(data);
    return res;
  }
  find(phoneNumQuery, email) {
    let data = dbContext.Customer.find({
      creatorEmail: email,
      phoneNumber: { $regex: ".*" + phoneNumQuery + ".*" },
    });
    if (!data) {
      throw new BadRequest("No data");
    }
    return data;
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
