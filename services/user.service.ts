import { mockUsers } from "@/constants/mock-data";
import { createListService } from "@/services/createMockService";

export const userService = createListService(mockUsers);
