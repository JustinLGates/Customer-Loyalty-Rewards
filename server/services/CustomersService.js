import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CustomersService {
  async create(data) {
    let res = await dbContext.Customer.create(data);
    return res;
  }
  find(query) {
    let data = dbContext.Customer.find(query);
    if (!data) {
      throw new BadRequest("No data");
    }
    return data;
  }
  findById(id) {
    let data = dbContext.Customer.find({ _id: id });
    if (!data) {
      throw new BadRequest("Invalid id");
    }
    return data;
  }
  edit(id, data) {
    let result = dbContext.Customer.findOneAndUpdate({ _id: id }, data);
    if (!result) {
      throw new BadRequest("Invalid id");
    }
    return result;
  }
  delete(id) {
    let data = dbContext.Customer.findByIdAndDelete({ _id: id });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
}

export const customersService = new CustomersService();
