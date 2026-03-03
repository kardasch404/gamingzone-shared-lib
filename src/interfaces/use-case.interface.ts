export interface IUseCase<TInput, TOutput> {
  execute(input: TInput): Promise<TOutput>;
}

export interface ICommand<TInput, TOutput> extends IUseCase<TInput, TOutput> {}

export interface IQuery<TInput, TOutput> extends IUseCase<TInput, TOutput> {}
