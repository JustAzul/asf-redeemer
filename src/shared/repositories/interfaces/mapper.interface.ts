export abstract class IMapper<T = unknown> {
  abstract toEntity(data: unknown): T;
}
