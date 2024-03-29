import { Router, Request, Response } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request: Request, response: Response) => {
  return createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
