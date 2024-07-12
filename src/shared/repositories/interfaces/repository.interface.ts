export abstract class ApiRepository<T> {
  abstract fetchDetails(ids: string[]): Promise<T>;
}
