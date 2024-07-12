export abstract class IMapper<T = unknown> {
  abstract toEntity(response: unknown): T;
}
