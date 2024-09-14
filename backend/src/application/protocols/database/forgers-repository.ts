import { Forger, Ring } from "@/domain/entities"

export interface ForgersRepository {
    create(input: ForgersRepository.Create.Input): ForgersRepository.Create.Output
    findById(input: ForgersRepository.FindById.Input): ForgersRepository.FindById.Output
}

export namespace ForgersRepository {
    export namespace Create {
        export type Input = {
            forgerId?: string
            name: string
            maxRings: number
        }

        export type Output = Promise<Forger>
    }

    export namespace FindById {
        export type Input = {
            forgerId: string
        }

        export type Output = Promise<Forger | null>
    }
}