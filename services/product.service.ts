import { mockProducts } from "@/constants/mock-data";
import { createListService } from "@/services/createMockService";

export const productService = createListService(mockProducts);
