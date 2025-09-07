
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model leads
 * 
 */
export type leads = $Result.DefaultSelection<Prisma.$leadsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Leads
 * const leads = await prisma.leads.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Leads
   * const leads = await prisma.leads.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.leads`: Exposes CRUD operations for the **leads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.leads.findMany()
    * ```
    */
  get leads(): Prisma.leadsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    leads: 'leads'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "leads"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      leads: {
        payload: Prisma.$leadsPayload<ExtArgs>
        fields: Prisma.leadsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leadsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leadsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          findFirst: {
            args: Prisma.leadsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leadsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          findMany: {
            args: Prisma.leadsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          create: {
            args: Prisma.leadsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          createMany: {
            args: Prisma.leadsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leadsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          delete: {
            args: Prisma.leadsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          update: {
            args: Prisma.leadsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          deleteMany: {
            args: Prisma.leadsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leadsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leadsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>[]
          }
          upsert: {
            args: Prisma.leadsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leadsPayload>
          }
          aggregate: {
            args: Prisma.LeadsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeads>
          }
          groupBy: {
            args: Prisma.leadsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadsGroupByOutputType>[]
          }
          count: {
            args: Prisma.leadsCountArgs<ExtArgs>
            result: $Utils.Optional<LeadsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    leads?: leadsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model leads
   */

  export type AggregateLeads = {
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  export type LeadsAvgAggregateOutputType = {
    id: number | null
    numberOfMissingTeeth: number | null
  }

  export type LeadsSumAggregateOutputType = {
    id: number | null
    numberOfMissingTeeth: number | null
  }

  export type LeadsMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    postal_code: string | null
    bcbs_type: string | null
    bcbs: string | null
    dentures: string | null
    current_conditions: string | null
    existing_fractured_teeth: string | null
    employer_insurance: string | null
    employer_bcbs_cash: string | null
    how_soon: string | null
    not_ppo_cash_pay: string | null
    pain_discomfort: string | null
    condition_description: string | null
    employer: string | null
    credit_score: string | null
    created_at: Date | null
    updated_at: Date | null
    transcript: string | null
    numberOfMissingTeeth: number | null
    isDecayedOrRotTeethPresent: boolean | null
    isUserApplicableForBcbsPpoInsurance: boolean | null
    isUserUploadingCards: boolean | null
    isManualConsultationRequired: boolean | null
    isInsuranceCardValid: boolean | null
    userInsuranceCard: string | null
    isUserInterestedInCashOptions: boolean | null
    okayWithPrice: boolean | null
    preferredTime: string | null
    preferredDay: string | null
    humanInterventionNeeded: boolean | null
    isAiTagOn: boolean | null
  }

  export type LeadsMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    postal_code: string | null
    bcbs_type: string | null
    bcbs: string | null
    dentures: string | null
    current_conditions: string | null
    existing_fractured_teeth: string | null
    employer_insurance: string | null
    employer_bcbs_cash: string | null
    how_soon: string | null
    not_ppo_cash_pay: string | null
    pain_discomfort: string | null
    condition_description: string | null
    employer: string | null
    credit_score: string | null
    created_at: Date | null
    updated_at: Date | null
    transcript: string | null
    numberOfMissingTeeth: number | null
    isDecayedOrRotTeethPresent: boolean | null
    isUserApplicableForBcbsPpoInsurance: boolean | null
    isUserUploadingCards: boolean | null
    isManualConsultationRequired: boolean | null
    isInsuranceCardValid: boolean | null
    userInsuranceCard: string | null
    isUserInterestedInCashOptions: boolean | null
    okayWithPrice: boolean | null
    preferredTime: string | null
    preferredDay: string | null
    humanInterventionNeeded: boolean | null
    isAiTagOn: boolean | null
  }

  export type LeadsCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    phone: number
    postal_code: number
    bcbs_type: number
    bcbs: number
    dentures: number
    current_conditions: number
    existing_fractured_teeth: number
    employer_insurance: number
    employer_bcbs_cash: number
    how_soon: number
    not_ppo_cash_pay: number
    pain_discomfort: number
    condition_description: number
    employer: number
    credit_score: number
    created_at: number
    updated_at: number
    transcript: number
    numberOfMissingTeeth: number
    isDecayedOrRotTeethPresent: number
    isUserApplicableForBcbsPpoInsurance: number
    isUserUploadingCards: number
    isManualConsultationRequired: number
    isInsuranceCardValid: number
    userInsuranceCard: number
    isUserInterestedInCashOptions: number
    okayWithPrice: number
    preferredTime: number
    preferredDay: number
    humanInterventionNeeded: number
    isAiTagOn: number
    _all: number
  }


  export type LeadsAvgAggregateInputType = {
    id?: true
    numberOfMissingTeeth?: true
  }

  export type LeadsSumAggregateInputType = {
    id?: true
    numberOfMissingTeeth?: true
  }

  export type LeadsMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    postal_code?: true
    bcbs_type?: true
    bcbs?: true
    dentures?: true
    current_conditions?: true
    existing_fractured_teeth?: true
    employer_insurance?: true
    employer_bcbs_cash?: true
    how_soon?: true
    not_ppo_cash_pay?: true
    pain_discomfort?: true
    condition_description?: true
    employer?: true
    credit_score?: true
    created_at?: true
    updated_at?: true
    transcript?: true
    numberOfMissingTeeth?: true
    isDecayedOrRotTeethPresent?: true
    isUserApplicableForBcbsPpoInsurance?: true
    isUserUploadingCards?: true
    isManualConsultationRequired?: true
    isInsuranceCardValid?: true
    userInsuranceCard?: true
    isUserInterestedInCashOptions?: true
    okayWithPrice?: true
    preferredTime?: true
    preferredDay?: true
    humanInterventionNeeded?: true
    isAiTagOn?: true
  }

  export type LeadsMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    postal_code?: true
    bcbs_type?: true
    bcbs?: true
    dentures?: true
    current_conditions?: true
    existing_fractured_teeth?: true
    employer_insurance?: true
    employer_bcbs_cash?: true
    how_soon?: true
    not_ppo_cash_pay?: true
    pain_discomfort?: true
    condition_description?: true
    employer?: true
    credit_score?: true
    created_at?: true
    updated_at?: true
    transcript?: true
    numberOfMissingTeeth?: true
    isDecayedOrRotTeethPresent?: true
    isUserApplicableForBcbsPpoInsurance?: true
    isUserUploadingCards?: true
    isManualConsultationRequired?: true
    isInsuranceCardValid?: true
    userInsuranceCard?: true
    isUserInterestedInCashOptions?: true
    okayWithPrice?: true
    preferredTime?: true
    preferredDay?: true
    humanInterventionNeeded?: true
    isAiTagOn?: true
  }

  export type LeadsCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    postal_code?: true
    bcbs_type?: true
    bcbs?: true
    dentures?: true
    current_conditions?: true
    existing_fractured_teeth?: true
    employer_insurance?: true
    employer_bcbs_cash?: true
    how_soon?: true
    not_ppo_cash_pay?: true
    pain_discomfort?: true
    condition_description?: true
    employer?: true
    credit_score?: true
    created_at?: true
    updated_at?: true
    transcript?: true
    numberOfMissingTeeth?: true
    isDecayedOrRotTeethPresent?: true
    isUserApplicableForBcbsPpoInsurance?: true
    isUserUploadingCards?: true
    isManualConsultationRequired?: true
    isInsuranceCardValid?: true
    userInsuranceCard?: true
    isUserInterestedInCashOptions?: true
    okayWithPrice?: true
    preferredTime?: true
    preferredDay?: true
    humanInterventionNeeded?: true
    isAiTagOn?: true
    _all?: true
  }

  export type LeadsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leads to aggregate.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leads
    **/
    _count?: true | LeadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadsMaxAggregateInputType
  }

  export type GetLeadsAggregateType<T extends LeadsAggregateArgs> = {
        [P in keyof T & keyof AggregateLeads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeads[P]>
      : GetScalarType<T[P], AggregateLeads[P]>
  }




  export type leadsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leadsWhereInput
    orderBy?: leadsOrderByWithAggregationInput | leadsOrderByWithAggregationInput[]
    by: LeadsScalarFieldEnum[] | LeadsScalarFieldEnum
    having?: leadsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadsCountAggregateInputType | true
    _avg?: LeadsAvgAggregateInputType
    _sum?: LeadsSumAggregateInputType
    _min?: LeadsMinAggregateInputType
    _max?: LeadsMaxAggregateInputType
  }

  export type LeadsGroupByOutputType = {
    id: number
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    postal_code: string | null
    bcbs_type: string | null
    bcbs: string | null
    dentures: string | null
    current_conditions: string | null
    existing_fractured_teeth: string | null
    employer_insurance: string | null
    employer_bcbs_cash: string | null
    how_soon: string | null
    not_ppo_cash_pay: string | null
    pain_discomfort: string | null
    condition_description: string | null
    employer: string | null
    credit_score: string | null
    created_at: Date
    updated_at: Date
    transcript: string | null
    numberOfMissingTeeth: number | null
    isDecayedOrRotTeethPresent: boolean | null
    isUserApplicableForBcbsPpoInsurance: boolean | null
    isUserUploadingCards: boolean | null
    isManualConsultationRequired: boolean | null
    isInsuranceCardValid: boolean | null
    userInsuranceCard: string | null
    isUserInterestedInCashOptions: boolean | null
    okayWithPrice: boolean | null
    preferredTime: string | null
    preferredDay: string | null
    humanInterventionNeeded: boolean | null
    isAiTagOn: boolean | null
    _count: LeadsCountAggregateOutputType | null
    _avg: LeadsAvgAggregateOutputType | null
    _sum: LeadsSumAggregateOutputType | null
    _min: LeadsMinAggregateOutputType | null
    _max: LeadsMaxAggregateOutputType | null
  }

  type GetLeadsGroupByPayload<T extends leadsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadsGroupByOutputType[P]>
            : GetScalarType<T[P], LeadsGroupByOutputType[P]>
        }
      >
    >


  export type leadsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    postal_code?: boolean
    bcbs_type?: boolean
    bcbs?: boolean
    dentures?: boolean
    current_conditions?: boolean
    existing_fractured_teeth?: boolean
    employer_insurance?: boolean
    employer_bcbs_cash?: boolean
    how_soon?: boolean
    not_ppo_cash_pay?: boolean
    pain_discomfort?: boolean
    condition_description?: boolean
    employer?: boolean
    credit_score?: boolean
    created_at?: boolean
    updated_at?: boolean
    transcript?: boolean
    numberOfMissingTeeth?: boolean
    isDecayedOrRotTeethPresent?: boolean
    isUserApplicableForBcbsPpoInsurance?: boolean
    isUserUploadingCards?: boolean
    isManualConsultationRequired?: boolean
    isInsuranceCardValid?: boolean
    userInsuranceCard?: boolean
    isUserInterestedInCashOptions?: boolean
    okayWithPrice?: boolean
    preferredTime?: boolean
    preferredDay?: boolean
    humanInterventionNeeded?: boolean
    isAiTagOn?: boolean
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    postal_code?: boolean
    bcbs_type?: boolean
    bcbs?: boolean
    dentures?: boolean
    current_conditions?: boolean
    existing_fractured_teeth?: boolean
    employer_insurance?: boolean
    employer_bcbs_cash?: boolean
    how_soon?: boolean
    not_ppo_cash_pay?: boolean
    pain_discomfort?: boolean
    condition_description?: boolean
    employer?: boolean
    credit_score?: boolean
    created_at?: boolean
    updated_at?: boolean
    transcript?: boolean
    numberOfMissingTeeth?: boolean
    isDecayedOrRotTeethPresent?: boolean
    isUserApplicableForBcbsPpoInsurance?: boolean
    isUserUploadingCards?: boolean
    isManualConsultationRequired?: boolean
    isInsuranceCardValid?: boolean
    userInsuranceCard?: boolean
    isUserInterestedInCashOptions?: boolean
    okayWithPrice?: boolean
    preferredTime?: boolean
    preferredDay?: boolean
    humanInterventionNeeded?: boolean
    isAiTagOn?: boolean
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    postal_code?: boolean
    bcbs_type?: boolean
    bcbs?: boolean
    dentures?: boolean
    current_conditions?: boolean
    existing_fractured_teeth?: boolean
    employer_insurance?: boolean
    employer_bcbs_cash?: boolean
    how_soon?: boolean
    not_ppo_cash_pay?: boolean
    pain_discomfort?: boolean
    condition_description?: boolean
    employer?: boolean
    credit_score?: boolean
    created_at?: boolean
    updated_at?: boolean
    transcript?: boolean
    numberOfMissingTeeth?: boolean
    isDecayedOrRotTeethPresent?: boolean
    isUserApplicableForBcbsPpoInsurance?: boolean
    isUserUploadingCards?: boolean
    isManualConsultationRequired?: boolean
    isInsuranceCardValid?: boolean
    userInsuranceCard?: boolean
    isUserInterestedInCashOptions?: boolean
    okayWithPrice?: boolean
    preferredTime?: boolean
    preferredDay?: boolean
    humanInterventionNeeded?: boolean
    isAiTagOn?: boolean
  }, ExtArgs["result"]["leads"]>

  export type leadsSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    postal_code?: boolean
    bcbs_type?: boolean
    bcbs?: boolean
    dentures?: boolean
    current_conditions?: boolean
    existing_fractured_teeth?: boolean
    employer_insurance?: boolean
    employer_bcbs_cash?: boolean
    how_soon?: boolean
    not_ppo_cash_pay?: boolean
    pain_discomfort?: boolean
    condition_description?: boolean
    employer?: boolean
    credit_score?: boolean
    created_at?: boolean
    updated_at?: boolean
    transcript?: boolean
    numberOfMissingTeeth?: boolean
    isDecayedOrRotTeethPresent?: boolean
    isUserApplicableForBcbsPpoInsurance?: boolean
    isUserUploadingCards?: boolean
    isManualConsultationRequired?: boolean
    isInsuranceCardValid?: boolean
    userInsuranceCard?: boolean
    isUserInterestedInCashOptions?: boolean
    okayWithPrice?: boolean
    preferredTime?: boolean
    preferredDay?: boolean
    humanInterventionNeeded?: boolean
    isAiTagOn?: boolean
  }

  export type leadsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "email" | "phone" | "postal_code" | "bcbs_type" | "bcbs" | "dentures" | "current_conditions" | "existing_fractured_teeth" | "employer_insurance" | "employer_bcbs_cash" | "how_soon" | "not_ppo_cash_pay" | "pain_discomfort" | "condition_description" | "employer" | "credit_score" | "created_at" | "updated_at" | "transcript" | "numberOfMissingTeeth" | "isDecayedOrRotTeethPresent" | "isUserApplicableForBcbsPpoInsurance" | "isUserUploadingCards" | "isManualConsultationRequired" | "isInsuranceCardValid" | "userInsuranceCard" | "isUserInterestedInCashOptions" | "okayWithPrice" | "preferredTime" | "preferredDay" | "humanInterventionNeeded" | "isAiTagOn", ExtArgs["result"]["leads"]>

  export type $leadsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leads"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string | null
      last_name: string | null
      email: string | null
      phone: string | null
      postal_code: string | null
      bcbs_type: string | null
      bcbs: string | null
      dentures: string | null
      current_conditions: string | null
      existing_fractured_teeth: string | null
      employer_insurance: string | null
      employer_bcbs_cash: string | null
      how_soon: string | null
      not_ppo_cash_pay: string | null
      pain_discomfort: string | null
      condition_description: string | null
      employer: string | null
      credit_score: string | null
      created_at: Date
      updated_at: Date
      transcript: string | null
      numberOfMissingTeeth: number | null
      isDecayedOrRotTeethPresent: boolean | null
      isUserApplicableForBcbsPpoInsurance: boolean | null
      isUserUploadingCards: boolean | null
      isManualConsultationRequired: boolean | null
      isInsuranceCardValid: boolean | null
      userInsuranceCard: string | null
      isUserInterestedInCashOptions: boolean | null
      okayWithPrice: boolean | null
      preferredTime: string | null
      preferredDay: string | null
      humanInterventionNeeded: boolean | null
      isAiTagOn: boolean | null
    }, ExtArgs["result"]["leads"]>
    composites: {}
  }

  type leadsGetPayload<S extends boolean | null | undefined | leadsDefaultArgs> = $Result.GetResult<Prisma.$leadsPayload, S>

  type leadsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leadsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadsCountAggregateInputType | true
    }

  export interface leadsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leads'], meta: { name: 'leads' } }
    /**
     * Find zero or one Leads that matches the filter.
     * @param {leadsFindUniqueArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leadsFindUniqueArgs>(args: SelectSubset<T, leadsFindUniqueArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leads that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leadsFindUniqueOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leadsFindUniqueOrThrowArgs>(args: SelectSubset<T, leadsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindFirstArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leadsFindFirstArgs>(args?: SelectSubset<T, leadsFindFirstArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindFirstOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leadsFindFirstOrThrowArgs>(args?: SelectSubset<T, leadsFindFirstOrThrowArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.leads.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.leads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadsWithIdOnly = await prisma.leads.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leadsFindManyArgs>(args?: SelectSubset<T, leadsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leads.
     * @param {leadsCreateArgs} args - Arguments to create a Leads.
     * @example
     * // Create one Leads
     * const Leads = await prisma.leads.create({
     *   data: {
     *     // ... data to create a Leads
     *   }
     * })
     * 
     */
    create<T extends leadsCreateArgs>(args: SelectSubset<T, leadsCreateArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {leadsCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leadsCreateManyArgs>(args?: SelectSubset<T, leadsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {leadsCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leadsCreateManyAndReturnArgs>(args?: SelectSubset<T, leadsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leads.
     * @param {leadsDeleteArgs} args - Arguments to delete one Leads.
     * @example
     * // Delete one Leads
     * const Leads = await prisma.leads.delete({
     *   where: {
     *     // ... filter to delete one Leads
     *   }
     * })
     * 
     */
    delete<T extends leadsDeleteArgs>(args: SelectSubset<T, leadsDeleteArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leads.
     * @param {leadsUpdateArgs} args - Arguments to update one Leads.
     * @example
     * // Update one Leads
     * const leads = await prisma.leads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leadsUpdateArgs>(args: SelectSubset<T, leadsUpdateArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {leadsDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.leads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leadsDeleteManyArgs>(args?: SelectSubset<T, leadsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leadsUpdateManyArgs>(args: SelectSubset<T, leadsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {leadsUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leadsUpdateManyAndReturnArgs>(args: SelectSubset<T, leadsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leads.
     * @param {leadsUpsertArgs} args - Arguments to update or create a Leads.
     * @example
     * // Update or create a Leads
     * const leads = await prisma.leads.upsert({
     *   create: {
     *     // ... data to create a Leads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leads we want to update
     *   }
     * })
     */
    upsert<T extends leadsUpsertArgs>(args: SelectSubset<T, leadsUpsertArgs<ExtArgs>>): Prisma__leadsClient<$Result.GetResult<Prisma.$leadsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.leads.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends leadsCountArgs>(
      args?: Subset<T, leadsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadsAggregateArgs>(args: Subset<T, LeadsAggregateArgs>): Prisma.PrismaPromise<GetLeadsAggregateType<T>>

    /**
     * Group by Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leadsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leadsGroupByArgs['orderBy'] }
        : { orderBy?: leadsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leads model
   */
  readonly fields: leadsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leadsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leads model
   */
  interface leadsFieldRefs {
    readonly id: FieldRef<"leads", 'Int'>
    readonly first_name: FieldRef<"leads", 'String'>
    readonly last_name: FieldRef<"leads", 'String'>
    readonly email: FieldRef<"leads", 'String'>
    readonly phone: FieldRef<"leads", 'String'>
    readonly postal_code: FieldRef<"leads", 'String'>
    readonly bcbs_type: FieldRef<"leads", 'String'>
    readonly bcbs: FieldRef<"leads", 'String'>
    readonly dentures: FieldRef<"leads", 'String'>
    readonly current_conditions: FieldRef<"leads", 'String'>
    readonly existing_fractured_teeth: FieldRef<"leads", 'String'>
    readonly employer_insurance: FieldRef<"leads", 'String'>
    readonly employer_bcbs_cash: FieldRef<"leads", 'String'>
    readonly how_soon: FieldRef<"leads", 'String'>
    readonly not_ppo_cash_pay: FieldRef<"leads", 'String'>
    readonly pain_discomfort: FieldRef<"leads", 'String'>
    readonly condition_description: FieldRef<"leads", 'String'>
    readonly employer: FieldRef<"leads", 'String'>
    readonly credit_score: FieldRef<"leads", 'String'>
    readonly created_at: FieldRef<"leads", 'DateTime'>
    readonly updated_at: FieldRef<"leads", 'DateTime'>
    readonly transcript: FieldRef<"leads", 'String'>
    readonly numberOfMissingTeeth: FieldRef<"leads", 'Int'>
    readonly isDecayedOrRotTeethPresent: FieldRef<"leads", 'Boolean'>
    readonly isUserApplicableForBcbsPpoInsurance: FieldRef<"leads", 'Boolean'>
    readonly isUserUploadingCards: FieldRef<"leads", 'Boolean'>
    readonly isManualConsultationRequired: FieldRef<"leads", 'Boolean'>
    readonly isInsuranceCardValid: FieldRef<"leads", 'Boolean'>
    readonly userInsuranceCard: FieldRef<"leads", 'String'>
    readonly isUserInterestedInCashOptions: FieldRef<"leads", 'Boolean'>
    readonly okayWithPrice: FieldRef<"leads", 'Boolean'>
    readonly preferredTime: FieldRef<"leads", 'String'>
    readonly preferredDay: FieldRef<"leads", 'String'>
    readonly humanInterventionNeeded: FieldRef<"leads", 'Boolean'>
    readonly isAiTagOn: FieldRef<"leads", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * leads findUnique
   */
  export type leadsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads findUniqueOrThrow
   */
  export type leadsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads findFirst
   */
  export type leadsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads findFirstOrThrow
   */
  export type leadsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads findMany
   */
  export type leadsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter, which leads to fetch.
     */
    where?: leadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leads to fetch.
     */
    orderBy?: leadsOrderByWithRelationInput | leadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leads.
     */
    cursor?: leadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leads.
     */
    skip?: number
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[]
  }

  /**
   * leads create
   */
  export type leadsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data needed to create a leads.
     */
    data: XOR<leadsCreateInput, leadsUncheckedCreateInput>
  }

  /**
   * leads createMany
   */
  export type leadsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leads.
     */
    data: leadsCreateManyInput | leadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leads createManyAndReturn
   */
  export type leadsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data used to create many leads.
     */
    data: leadsCreateManyInput | leadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leads update
   */
  export type leadsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data needed to update a leads.
     */
    data: XOR<leadsUpdateInput, leadsUncheckedUpdateInput>
    /**
     * Choose, which leads to update.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads updateMany
   */
  export type leadsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leads.
     */
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyInput>
    /**
     * Filter which leads to update
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to update.
     */
    limit?: number
  }

  /**
   * leads updateManyAndReturn
   */
  export type leadsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The data used to update leads.
     */
    data: XOR<leadsUpdateManyMutationInput, leadsUncheckedUpdateManyInput>
    /**
     * Filter which leads to update
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to update.
     */
    limit?: number
  }

  /**
   * leads upsert
   */
  export type leadsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * The filter to search for the leads to update in case it exists.
     */
    where: leadsWhereUniqueInput
    /**
     * In case the leads found by the `where` argument doesn't exist, create a new leads with this data.
     */
    create: XOR<leadsCreateInput, leadsUncheckedCreateInput>
    /**
     * In case the leads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leadsUpdateInput, leadsUncheckedUpdateInput>
  }

  /**
   * leads delete
   */
  export type leadsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
    /**
     * Filter which leads to delete.
     */
    where: leadsWhereUniqueInput
  }

  /**
   * leads deleteMany
   */
  export type leadsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leads to delete
     */
    where?: leadsWhereInput
    /**
     * Limit how many leads to delete.
     */
    limit?: number
  }

  /**
   * leads without action
   */
  export type leadsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leads
     */
    select?: leadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leads
     */
    omit?: leadsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LeadsScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone: 'phone',
    postal_code: 'postal_code',
    bcbs_type: 'bcbs_type',
    bcbs: 'bcbs',
    dentures: 'dentures',
    current_conditions: 'current_conditions',
    existing_fractured_teeth: 'existing_fractured_teeth',
    employer_insurance: 'employer_insurance',
    employer_bcbs_cash: 'employer_bcbs_cash',
    how_soon: 'how_soon',
    not_ppo_cash_pay: 'not_ppo_cash_pay',
    pain_discomfort: 'pain_discomfort',
    condition_description: 'condition_description',
    employer: 'employer',
    credit_score: 'credit_score',
    created_at: 'created_at',
    updated_at: 'updated_at',
    transcript: 'transcript',
    numberOfMissingTeeth: 'numberOfMissingTeeth',
    isDecayedOrRotTeethPresent: 'isDecayedOrRotTeethPresent',
    isUserApplicableForBcbsPpoInsurance: 'isUserApplicableForBcbsPpoInsurance',
    isUserUploadingCards: 'isUserUploadingCards',
    isManualConsultationRequired: 'isManualConsultationRequired',
    isInsuranceCardValid: 'isInsuranceCardValid',
    userInsuranceCard: 'userInsuranceCard',
    isUserInterestedInCashOptions: 'isUserInterestedInCashOptions',
    okayWithPrice: 'okayWithPrice',
    preferredTime: 'preferredTime',
    preferredDay: 'preferredDay',
    humanInterventionNeeded: 'humanInterventionNeeded',
    isAiTagOn: 'isAiTagOn'
  };

  export type LeadsScalarFieldEnum = (typeof LeadsScalarFieldEnum)[keyof typeof LeadsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type leadsWhereInput = {
    AND?: leadsWhereInput | leadsWhereInput[]
    OR?: leadsWhereInput[]
    NOT?: leadsWhereInput | leadsWhereInput[]
    id?: IntFilter<"leads"> | number
    first_name?: StringNullableFilter<"leads"> | string | null
    last_name?: StringNullableFilter<"leads"> | string | null
    email?: StringNullableFilter<"leads"> | string | null
    phone?: StringNullableFilter<"leads"> | string | null
    postal_code?: StringNullableFilter<"leads"> | string | null
    bcbs_type?: StringNullableFilter<"leads"> | string | null
    bcbs?: StringNullableFilter<"leads"> | string | null
    dentures?: StringNullableFilter<"leads"> | string | null
    current_conditions?: StringNullableFilter<"leads"> | string | null
    existing_fractured_teeth?: StringNullableFilter<"leads"> | string | null
    employer_insurance?: StringNullableFilter<"leads"> | string | null
    employer_bcbs_cash?: StringNullableFilter<"leads"> | string | null
    how_soon?: StringNullableFilter<"leads"> | string | null
    not_ppo_cash_pay?: StringNullableFilter<"leads"> | string | null
    pain_discomfort?: StringNullableFilter<"leads"> | string | null
    condition_description?: StringNullableFilter<"leads"> | string | null
    employer?: StringNullableFilter<"leads"> | string | null
    credit_score?: StringNullableFilter<"leads"> | string | null
    created_at?: DateTimeFilter<"leads"> | Date | string
    updated_at?: DateTimeFilter<"leads"> | Date | string
    transcript?: StringNullableFilter<"leads"> | string | null
    numberOfMissingTeeth?: IntNullableFilter<"leads"> | number | null
    isDecayedOrRotTeethPresent?: BoolNullableFilter<"leads"> | boolean | null
    isUserApplicableForBcbsPpoInsurance?: BoolNullableFilter<"leads"> | boolean | null
    isUserUploadingCards?: BoolNullableFilter<"leads"> | boolean | null
    isManualConsultationRequired?: BoolNullableFilter<"leads"> | boolean | null
    isInsuranceCardValid?: BoolNullableFilter<"leads"> | boolean | null
    userInsuranceCard?: StringNullableFilter<"leads"> | string | null
    isUserInterestedInCashOptions?: BoolNullableFilter<"leads"> | boolean | null
    okayWithPrice?: BoolNullableFilter<"leads"> | boolean | null
    preferredTime?: StringNullableFilter<"leads"> | string | null
    preferredDay?: StringNullableFilter<"leads"> | string | null
    humanInterventionNeeded?: BoolNullableFilter<"leads"> | boolean | null
    isAiTagOn?: BoolNullableFilter<"leads"> | boolean | null
  }

  export type leadsOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    bcbs_type?: SortOrderInput | SortOrder
    bcbs?: SortOrderInput | SortOrder
    dentures?: SortOrderInput | SortOrder
    current_conditions?: SortOrderInput | SortOrder
    existing_fractured_teeth?: SortOrderInput | SortOrder
    employer_insurance?: SortOrderInput | SortOrder
    employer_bcbs_cash?: SortOrderInput | SortOrder
    how_soon?: SortOrderInput | SortOrder
    not_ppo_cash_pay?: SortOrderInput | SortOrder
    pain_discomfort?: SortOrderInput | SortOrder
    condition_description?: SortOrderInput | SortOrder
    employer?: SortOrderInput | SortOrder
    credit_score?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transcript?: SortOrderInput | SortOrder
    numberOfMissingTeeth?: SortOrderInput | SortOrder
    isDecayedOrRotTeethPresent?: SortOrderInput | SortOrder
    isUserApplicableForBcbsPpoInsurance?: SortOrderInput | SortOrder
    isUserUploadingCards?: SortOrderInput | SortOrder
    isManualConsultationRequired?: SortOrderInput | SortOrder
    isInsuranceCardValid?: SortOrderInput | SortOrder
    userInsuranceCard?: SortOrderInput | SortOrder
    isUserInterestedInCashOptions?: SortOrderInput | SortOrder
    okayWithPrice?: SortOrderInput | SortOrder
    preferredTime?: SortOrderInput | SortOrder
    preferredDay?: SortOrderInput | SortOrder
    humanInterventionNeeded?: SortOrderInput | SortOrder
    isAiTagOn?: SortOrderInput | SortOrder
  }

  export type leadsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: leadsWhereInput | leadsWhereInput[]
    OR?: leadsWhereInput[]
    NOT?: leadsWhereInput | leadsWhereInput[]
    first_name?: StringNullableFilter<"leads"> | string | null
    last_name?: StringNullableFilter<"leads"> | string | null
    email?: StringNullableFilter<"leads"> | string | null
    phone?: StringNullableFilter<"leads"> | string | null
    postal_code?: StringNullableFilter<"leads"> | string | null
    bcbs_type?: StringNullableFilter<"leads"> | string | null
    bcbs?: StringNullableFilter<"leads"> | string | null
    dentures?: StringNullableFilter<"leads"> | string | null
    current_conditions?: StringNullableFilter<"leads"> | string | null
    existing_fractured_teeth?: StringNullableFilter<"leads"> | string | null
    employer_insurance?: StringNullableFilter<"leads"> | string | null
    employer_bcbs_cash?: StringNullableFilter<"leads"> | string | null
    how_soon?: StringNullableFilter<"leads"> | string | null
    not_ppo_cash_pay?: StringNullableFilter<"leads"> | string | null
    pain_discomfort?: StringNullableFilter<"leads"> | string | null
    condition_description?: StringNullableFilter<"leads"> | string | null
    employer?: StringNullableFilter<"leads"> | string | null
    credit_score?: StringNullableFilter<"leads"> | string | null
    created_at?: DateTimeFilter<"leads"> | Date | string
    updated_at?: DateTimeFilter<"leads"> | Date | string
    transcript?: StringNullableFilter<"leads"> | string | null
    numberOfMissingTeeth?: IntNullableFilter<"leads"> | number | null
    isDecayedOrRotTeethPresent?: BoolNullableFilter<"leads"> | boolean | null
    isUserApplicableForBcbsPpoInsurance?: BoolNullableFilter<"leads"> | boolean | null
    isUserUploadingCards?: BoolNullableFilter<"leads"> | boolean | null
    isManualConsultationRequired?: BoolNullableFilter<"leads"> | boolean | null
    isInsuranceCardValid?: BoolNullableFilter<"leads"> | boolean | null
    userInsuranceCard?: StringNullableFilter<"leads"> | string | null
    isUserInterestedInCashOptions?: BoolNullableFilter<"leads"> | boolean | null
    okayWithPrice?: BoolNullableFilter<"leads"> | boolean | null
    preferredTime?: StringNullableFilter<"leads"> | string | null
    preferredDay?: StringNullableFilter<"leads"> | string | null
    humanInterventionNeeded?: BoolNullableFilter<"leads"> | boolean | null
    isAiTagOn?: BoolNullableFilter<"leads"> | boolean | null
  }, "id">

  export type leadsOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    bcbs_type?: SortOrderInput | SortOrder
    bcbs?: SortOrderInput | SortOrder
    dentures?: SortOrderInput | SortOrder
    current_conditions?: SortOrderInput | SortOrder
    existing_fractured_teeth?: SortOrderInput | SortOrder
    employer_insurance?: SortOrderInput | SortOrder
    employer_bcbs_cash?: SortOrderInput | SortOrder
    how_soon?: SortOrderInput | SortOrder
    not_ppo_cash_pay?: SortOrderInput | SortOrder
    pain_discomfort?: SortOrderInput | SortOrder
    condition_description?: SortOrderInput | SortOrder
    employer?: SortOrderInput | SortOrder
    credit_score?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transcript?: SortOrderInput | SortOrder
    numberOfMissingTeeth?: SortOrderInput | SortOrder
    isDecayedOrRotTeethPresent?: SortOrderInput | SortOrder
    isUserApplicableForBcbsPpoInsurance?: SortOrderInput | SortOrder
    isUserUploadingCards?: SortOrderInput | SortOrder
    isManualConsultationRequired?: SortOrderInput | SortOrder
    isInsuranceCardValid?: SortOrderInput | SortOrder
    userInsuranceCard?: SortOrderInput | SortOrder
    isUserInterestedInCashOptions?: SortOrderInput | SortOrder
    okayWithPrice?: SortOrderInput | SortOrder
    preferredTime?: SortOrderInput | SortOrder
    preferredDay?: SortOrderInput | SortOrder
    humanInterventionNeeded?: SortOrderInput | SortOrder
    isAiTagOn?: SortOrderInput | SortOrder
    _count?: leadsCountOrderByAggregateInput
    _avg?: leadsAvgOrderByAggregateInput
    _max?: leadsMaxOrderByAggregateInput
    _min?: leadsMinOrderByAggregateInput
    _sum?: leadsSumOrderByAggregateInput
  }

  export type leadsScalarWhereWithAggregatesInput = {
    AND?: leadsScalarWhereWithAggregatesInput | leadsScalarWhereWithAggregatesInput[]
    OR?: leadsScalarWhereWithAggregatesInput[]
    NOT?: leadsScalarWhereWithAggregatesInput | leadsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"leads"> | number
    first_name?: StringNullableWithAggregatesFilter<"leads"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"leads"> | string | null
    email?: StringNullableWithAggregatesFilter<"leads"> | string | null
    phone?: StringNullableWithAggregatesFilter<"leads"> | string | null
    postal_code?: StringNullableWithAggregatesFilter<"leads"> | string | null
    bcbs_type?: StringNullableWithAggregatesFilter<"leads"> | string | null
    bcbs?: StringNullableWithAggregatesFilter<"leads"> | string | null
    dentures?: StringNullableWithAggregatesFilter<"leads"> | string | null
    current_conditions?: StringNullableWithAggregatesFilter<"leads"> | string | null
    existing_fractured_teeth?: StringNullableWithAggregatesFilter<"leads"> | string | null
    employer_insurance?: StringNullableWithAggregatesFilter<"leads"> | string | null
    employer_bcbs_cash?: StringNullableWithAggregatesFilter<"leads"> | string | null
    how_soon?: StringNullableWithAggregatesFilter<"leads"> | string | null
    not_ppo_cash_pay?: StringNullableWithAggregatesFilter<"leads"> | string | null
    pain_discomfort?: StringNullableWithAggregatesFilter<"leads"> | string | null
    condition_description?: StringNullableWithAggregatesFilter<"leads"> | string | null
    employer?: StringNullableWithAggregatesFilter<"leads"> | string | null
    credit_score?: StringNullableWithAggregatesFilter<"leads"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"leads"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"leads"> | Date | string
    transcript?: StringNullableWithAggregatesFilter<"leads"> | string | null
    numberOfMissingTeeth?: IntNullableWithAggregatesFilter<"leads"> | number | null
    isDecayedOrRotTeethPresent?: BoolNullableWithAggregatesFilter<"leads"> | boolean | null
    isUserApplicableForBcbsPpoInsurance?: BoolNullableWithAggregatesFilter<"leads"> | boolean | null
    isUserUploadingCards?: BoolNullableWithAggregatesFilter<"leads"> | boolean | null
    isManualConsultationRequired?: BoolNullableWithAggregatesFilter<"leads"> | boolean | null
    isInsuranceCardValid?: BoolNullableWithAggregatesFilter<"leads"> | boolean | null
    userInsuranceCard?: StringNullableWithAggregatesFilter<"leads"> | string | null
    isUserInterestedInCashOptions?: BoolNullableWithAggregatesFilter<"leads"> | boolean | null
    okayWithPrice?: BoolNullableWithAggregatesFilter<"leads"> | boolean | null
    preferredTime?: StringNullableWithAggregatesFilter<"leads"> | string | null
    preferredDay?: StringNullableWithAggregatesFilter<"leads"> | string | null
    humanInterventionNeeded?: BoolNullableWithAggregatesFilter<"leads"> | boolean | null
    isAiTagOn?: BoolNullableWithAggregatesFilter<"leads"> | boolean | null
  }

  export type leadsCreateInput = {
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    phone?: string | null
    postal_code?: string | null
    bcbs_type?: string | null
    bcbs?: string | null
    dentures?: string | null
    current_conditions?: string | null
    existing_fractured_teeth?: string | null
    employer_insurance?: string | null
    employer_bcbs_cash?: string | null
    how_soon?: string | null
    not_ppo_cash_pay?: string | null
    pain_discomfort?: string | null
    condition_description?: string | null
    employer?: string | null
    credit_score?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    transcript?: string | null
    numberOfMissingTeeth?: number | null
    isDecayedOrRotTeethPresent?: boolean | null
    isUserApplicableForBcbsPpoInsurance?: boolean | null
    isUserUploadingCards?: boolean | null
    isManualConsultationRequired?: boolean | null
    isInsuranceCardValid?: boolean | null
    userInsuranceCard?: string | null
    isUserInterestedInCashOptions?: boolean | null
    okayWithPrice?: boolean | null
    preferredTime?: string | null
    preferredDay?: string | null
    humanInterventionNeeded?: boolean | null
    isAiTagOn?: boolean | null
  }

  export type leadsUncheckedCreateInput = {
    id?: number
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    phone?: string | null
    postal_code?: string | null
    bcbs_type?: string | null
    bcbs?: string | null
    dentures?: string | null
    current_conditions?: string | null
    existing_fractured_teeth?: string | null
    employer_insurance?: string | null
    employer_bcbs_cash?: string | null
    how_soon?: string | null
    not_ppo_cash_pay?: string | null
    pain_discomfort?: string | null
    condition_description?: string | null
    employer?: string | null
    credit_score?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    transcript?: string | null
    numberOfMissingTeeth?: number | null
    isDecayedOrRotTeethPresent?: boolean | null
    isUserApplicableForBcbsPpoInsurance?: boolean | null
    isUserUploadingCards?: boolean | null
    isManualConsultationRequired?: boolean | null
    isInsuranceCardValid?: boolean | null
    userInsuranceCard?: string | null
    isUserInterestedInCashOptions?: boolean | null
    okayWithPrice?: boolean | null
    preferredTime?: string | null
    preferredDay?: string | null
    humanInterventionNeeded?: boolean | null
    isAiTagOn?: boolean | null
  }

  export type leadsUpdateInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    bcbs_type?: NullableStringFieldUpdateOperationsInput | string | null
    bcbs?: NullableStringFieldUpdateOperationsInput | string | null
    dentures?: NullableStringFieldUpdateOperationsInput | string | null
    current_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    existing_fractured_teeth?: NullableStringFieldUpdateOperationsInput | string | null
    employer_insurance?: NullableStringFieldUpdateOperationsInput | string | null
    employer_bcbs_cash?: NullableStringFieldUpdateOperationsInput | string | null
    how_soon?: NullableStringFieldUpdateOperationsInput | string | null
    not_ppo_cash_pay?: NullableStringFieldUpdateOperationsInput | string | null
    pain_discomfort?: NullableStringFieldUpdateOperationsInput | string | null
    condition_description?: NullableStringFieldUpdateOperationsInput | string | null
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    credit_score?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfMissingTeeth?: NullableIntFieldUpdateOperationsInput | number | null
    isDecayedOrRotTeethPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isUserApplicableForBcbsPpoInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isUserUploadingCards?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isManualConsultationRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isInsuranceCardValid?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userInsuranceCard?: NullableStringFieldUpdateOperationsInput | string | null
    isUserInterestedInCashOptions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    okayWithPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    preferredDay?: NullableStringFieldUpdateOperationsInput | string | null
    humanInterventionNeeded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAiTagOn?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type leadsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    bcbs_type?: NullableStringFieldUpdateOperationsInput | string | null
    bcbs?: NullableStringFieldUpdateOperationsInput | string | null
    dentures?: NullableStringFieldUpdateOperationsInput | string | null
    current_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    existing_fractured_teeth?: NullableStringFieldUpdateOperationsInput | string | null
    employer_insurance?: NullableStringFieldUpdateOperationsInput | string | null
    employer_bcbs_cash?: NullableStringFieldUpdateOperationsInput | string | null
    how_soon?: NullableStringFieldUpdateOperationsInput | string | null
    not_ppo_cash_pay?: NullableStringFieldUpdateOperationsInput | string | null
    pain_discomfort?: NullableStringFieldUpdateOperationsInput | string | null
    condition_description?: NullableStringFieldUpdateOperationsInput | string | null
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    credit_score?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfMissingTeeth?: NullableIntFieldUpdateOperationsInput | number | null
    isDecayedOrRotTeethPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isUserApplicableForBcbsPpoInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isUserUploadingCards?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isManualConsultationRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isInsuranceCardValid?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userInsuranceCard?: NullableStringFieldUpdateOperationsInput | string | null
    isUserInterestedInCashOptions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    okayWithPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    preferredDay?: NullableStringFieldUpdateOperationsInput | string | null
    humanInterventionNeeded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAiTagOn?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type leadsCreateManyInput = {
    id?: number
    first_name?: string | null
    last_name?: string | null
    email?: string | null
    phone?: string | null
    postal_code?: string | null
    bcbs_type?: string | null
    bcbs?: string | null
    dentures?: string | null
    current_conditions?: string | null
    existing_fractured_teeth?: string | null
    employer_insurance?: string | null
    employer_bcbs_cash?: string | null
    how_soon?: string | null
    not_ppo_cash_pay?: string | null
    pain_discomfort?: string | null
    condition_description?: string | null
    employer?: string | null
    credit_score?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    transcript?: string | null
    numberOfMissingTeeth?: number | null
    isDecayedOrRotTeethPresent?: boolean | null
    isUserApplicableForBcbsPpoInsurance?: boolean | null
    isUserUploadingCards?: boolean | null
    isManualConsultationRequired?: boolean | null
    isInsuranceCardValid?: boolean | null
    userInsuranceCard?: string | null
    isUserInterestedInCashOptions?: boolean | null
    okayWithPrice?: boolean | null
    preferredTime?: string | null
    preferredDay?: string | null
    humanInterventionNeeded?: boolean | null
    isAiTagOn?: boolean | null
  }

  export type leadsUpdateManyMutationInput = {
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    bcbs_type?: NullableStringFieldUpdateOperationsInput | string | null
    bcbs?: NullableStringFieldUpdateOperationsInput | string | null
    dentures?: NullableStringFieldUpdateOperationsInput | string | null
    current_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    existing_fractured_teeth?: NullableStringFieldUpdateOperationsInput | string | null
    employer_insurance?: NullableStringFieldUpdateOperationsInput | string | null
    employer_bcbs_cash?: NullableStringFieldUpdateOperationsInput | string | null
    how_soon?: NullableStringFieldUpdateOperationsInput | string | null
    not_ppo_cash_pay?: NullableStringFieldUpdateOperationsInput | string | null
    pain_discomfort?: NullableStringFieldUpdateOperationsInput | string | null
    condition_description?: NullableStringFieldUpdateOperationsInput | string | null
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    credit_score?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfMissingTeeth?: NullableIntFieldUpdateOperationsInput | number | null
    isDecayedOrRotTeethPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isUserApplicableForBcbsPpoInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isUserUploadingCards?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isManualConsultationRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isInsuranceCardValid?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userInsuranceCard?: NullableStringFieldUpdateOperationsInput | string | null
    isUserInterestedInCashOptions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    okayWithPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    preferredDay?: NullableStringFieldUpdateOperationsInput | string | null
    humanInterventionNeeded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAiTagOn?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type leadsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    bcbs_type?: NullableStringFieldUpdateOperationsInput | string | null
    bcbs?: NullableStringFieldUpdateOperationsInput | string | null
    dentures?: NullableStringFieldUpdateOperationsInput | string | null
    current_conditions?: NullableStringFieldUpdateOperationsInput | string | null
    existing_fractured_teeth?: NullableStringFieldUpdateOperationsInput | string | null
    employer_insurance?: NullableStringFieldUpdateOperationsInput | string | null
    employer_bcbs_cash?: NullableStringFieldUpdateOperationsInput | string | null
    how_soon?: NullableStringFieldUpdateOperationsInput | string | null
    not_ppo_cash_pay?: NullableStringFieldUpdateOperationsInput | string | null
    pain_discomfort?: NullableStringFieldUpdateOperationsInput | string | null
    condition_description?: NullableStringFieldUpdateOperationsInput | string | null
    employer?: NullableStringFieldUpdateOperationsInput | string | null
    credit_score?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    transcript?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfMissingTeeth?: NullableIntFieldUpdateOperationsInput | number | null
    isDecayedOrRotTeethPresent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isUserApplicableForBcbsPpoInsurance?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isUserUploadingCards?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isManualConsultationRequired?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isInsuranceCardValid?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userInsuranceCard?: NullableStringFieldUpdateOperationsInput | string | null
    isUserInterestedInCashOptions?: NullableBoolFieldUpdateOperationsInput | boolean | null
    okayWithPrice?: NullableBoolFieldUpdateOperationsInput | boolean | null
    preferredTime?: NullableStringFieldUpdateOperationsInput | string | null
    preferredDay?: NullableStringFieldUpdateOperationsInput | string | null
    humanInterventionNeeded?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isAiTagOn?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type leadsCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    postal_code?: SortOrder
    bcbs_type?: SortOrder
    bcbs?: SortOrder
    dentures?: SortOrder
    current_conditions?: SortOrder
    existing_fractured_teeth?: SortOrder
    employer_insurance?: SortOrder
    employer_bcbs_cash?: SortOrder
    how_soon?: SortOrder
    not_ppo_cash_pay?: SortOrder
    pain_discomfort?: SortOrder
    condition_description?: SortOrder
    employer?: SortOrder
    credit_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transcript?: SortOrder
    numberOfMissingTeeth?: SortOrder
    isDecayedOrRotTeethPresent?: SortOrder
    isUserApplicableForBcbsPpoInsurance?: SortOrder
    isUserUploadingCards?: SortOrder
    isManualConsultationRequired?: SortOrder
    isInsuranceCardValid?: SortOrder
    userInsuranceCard?: SortOrder
    isUserInterestedInCashOptions?: SortOrder
    okayWithPrice?: SortOrder
    preferredTime?: SortOrder
    preferredDay?: SortOrder
    humanInterventionNeeded?: SortOrder
    isAiTagOn?: SortOrder
  }

  export type leadsAvgOrderByAggregateInput = {
    id?: SortOrder
    numberOfMissingTeeth?: SortOrder
  }

  export type leadsMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    postal_code?: SortOrder
    bcbs_type?: SortOrder
    bcbs?: SortOrder
    dentures?: SortOrder
    current_conditions?: SortOrder
    existing_fractured_teeth?: SortOrder
    employer_insurance?: SortOrder
    employer_bcbs_cash?: SortOrder
    how_soon?: SortOrder
    not_ppo_cash_pay?: SortOrder
    pain_discomfort?: SortOrder
    condition_description?: SortOrder
    employer?: SortOrder
    credit_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transcript?: SortOrder
    numberOfMissingTeeth?: SortOrder
    isDecayedOrRotTeethPresent?: SortOrder
    isUserApplicableForBcbsPpoInsurance?: SortOrder
    isUserUploadingCards?: SortOrder
    isManualConsultationRequired?: SortOrder
    isInsuranceCardValid?: SortOrder
    userInsuranceCard?: SortOrder
    isUserInterestedInCashOptions?: SortOrder
    okayWithPrice?: SortOrder
    preferredTime?: SortOrder
    preferredDay?: SortOrder
    humanInterventionNeeded?: SortOrder
    isAiTagOn?: SortOrder
  }

  export type leadsMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    postal_code?: SortOrder
    bcbs_type?: SortOrder
    bcbs?: SortOrder
    dentures?: SortOrder
    current_conditions?: SortOrder
    existing_fractured_teeth?: SortOrder
    employer_insurance?: SortOrder
    employer_bcbs_cash?: SortOrder
    how_soon?: SortOrder
    not_ppo_cash_pay?: SortOrder
    pain_discomfort?: SortOrder
    condition_description?: SortOrder
    employer?: SortOrder
    credit_score?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    transcript?: SortOrder
    numberOfMissingTeeth?: SortOrder
    isDecayedOrRotTeethPresent?: SortOrder
    isUserApplicableForBcbsPpoInsurance?: SortOrder
    isUserUploadingCards?: SortOrder
    isManualConsultationRequired?: SortOrder
    isInsuranceCardValid?: SortOrder
    userInsuranceCard?: SortOrder
    isUserInterestedInCashOptions?: SortOrder
    okayWithPrice?: SortOrder
    preferredTime?: SortOrder
    preferredDay?: SortOrder
    humanInterventionNeeded?: SortOrder
    isAiTagOn?: SortOrder
  }

  export type leadsSumOrderByAggregateInput = {
    id?: SortOrder
    numberOfMissingTeeth?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}