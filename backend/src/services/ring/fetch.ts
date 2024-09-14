import { RingRepository } from "@/repositories/rings/ring-repository"

export class FetchService {
    constructor(private ringRespository: RingRepository) { }

  async execute() {
    const rings = await this.ringRespository.fetch()

    return {
      rings,
    }
  }
}
