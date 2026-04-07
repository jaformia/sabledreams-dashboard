import { mockAuthUser } from "@/constants/mock-data";
import { createValueService } from "@/services/createMockService";

const authStateService = createValueService(mockAuthUser);

export const authService = {
  async login() {
    return authStateService.get();
  },
};
