import { dbContext } from "../db/DbContext";

class CleanupService {
  async cleanupAsync() {
    // @ts-ignore
    await Promise.allSettled([
      dbContext.Notes.deleteMany({ reportedBy: "D$" }),
    ]);
    return { message: "Deleted all test data!" };
  }
}

const cleanupService = new CleanupService();
export default cleanupService;
