/**
 * Transforms the keys of an object type to uncapitalized versions.
 *
 * This utility type takes an object type `ObjType` and produces a new type
 * where all the keys are uncapitalized. The values associated with the keys
 * remain unchanged.
 *
 * @template ObjType - The object type whose keys are to be uncapitalized.
 *
 * @example
 * ```typescript
 * type Original = {
 *   FirstName: string;
 *   LastName: string;
 *   Age: number;
 * };
 *
 * type Uncapitalized = UncapitalizeKeys<Original>;
 * // Resulting type:
 * // {
 * //   firstName: string;
 * //   lastName: string;
 * //   age: number;
 * // }
 * ```
 */
export type UncapitalizeKeys<ObjType> =
  ObjType extends Record<infer K extends string, string | number | symbol>
    ? { [Attr in Uncapitalize<K>]: ObjType[Extract<K, Capitalize<Attr> | Attr>] }
    : ObjType

/**
 * Transforms the keys of an object type to be capitalized.
 *
 * @template ObjType - The type of the object whose keys are to be capitalized.
 *
 * @remarks
 * This utility type takes an object type `ObjType` and returns a new type
 * where all the keys are capitalized. The values associated with the keys
 * remain unchanged.
 *
 * @example
 * ```typescript
 * type Original = {
 *   firstName: string;
 *   lastName: string;
 * };
 *
 * type Capitalized = CapitalizeKeys<Original>;
 * // Resulting type:
 * // {
 * //   FirstName: string;
 * //   LastName: string;
 * // }
 * ```
 */
export type CapitalizeKeys<ObjType> =
  ObjType extends Record<infer K extends string, string | number | symbol>
    ? { [Attr in Capitalize<K>]: ObjType[Extract<K, Uncapitalize<Attr> | Attr>] }
    : ObjType

/**
 * Represents the possible types that can be used as keys in an object.
 * This includes `string`, `number`, and `symbol`.
 */
export type ObjKeyTypes = string | number | symbol

/**
 * A type that represents either a string or an object with keys of type string, number, or symbol, and values of type string.
 */
export type HashOrString = Record<string | number | symbol, string> | string
