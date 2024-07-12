export abstract class IApiRepository<T> {
  abstract fetchDetails(ids: string[]): Promise<T>;
}
