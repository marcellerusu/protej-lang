"use strict";
import {ObjectLiteral, Nil, nil, Keyword, dot, raise__b, panic__b, type_of, str, from_js} from '../src/std/globals.mjs'
import Meta, {nil__q, create, from_entries, as_num, exists__q, as_bool, log, invoke, pipe, as_kw} from '../src/std/meta.mjs';
import Iter, {take, until, skip, find, find_map, zip, reduce, map, flat_map, each, count, filter, filter_map, reject, all__q, any__q, split, compact, join, into, compose} from '../src/std/iter.mjs';
import Algebra from '../src/std/algebra.mjs';
import Bool, {negate} from '../src/std/bool.mjs';
import Collection, {at, len, empty__q, has__q, delete__b} from '../src/std/collection.mjs';
import OrderedSequence, {first} from '../src/std/ordered_sequence.mjs';
import {inc, InclusiveRange, ExclusiveRange, InclusiveRangeNoMaximum, InclusiveRangeNoMinimum, ExclusiveRangeNoMaximum, ExclusiveRangeNoMinimum} from '../src/std/range.mjs';
import Record, {keys, values} from '../src/std/record.mjs';
import Underscore, {_} from '../src/std/underscore.mjs';
let __coil_temp;
import {ParseError} from "./parse_error.mjs";
import tokenize from "./tokenizer.mjs";
import parse from "./parser.mjs";
import emit from "./emit.mjs";
import {CollectionView} from "./shared.mjs";
let compile = function (string, std_prefix) {
string ??= nil;
std_prefix ??= nil;let __coil_temp;
let tokens = dot(string, pipe)[invoke](tokenize);
let collection_view = CollectionView[Meta.create]([tokens, (0)]);
let ast = parse[invoke](collection_view);
let js = emit[invoke](ast);
let imports = str[invoke](`\"use strict\";
import {ObjectLiteral, Nil, nil, Keyword, dot, raise__b, panic__b, type_of, str, from_js} from '`, std_prefix, `/src/std/globals.mjs'
import Meta, {nil__q, create, from_entries, as_num, exists__q, as_bool, log, invoke, pipe, as_kw} from '`, std_prefix, `/src/std/meta.mjs';
import Iter, {take, until, skip, find, find_map, zip, reduce, map, flat_map, each, count, filter, filter_map, reject, all__q, any__q, split, compact, join, into, compose} from '`, std_prefix, `/src/std/iter.mjs';
import Algebra from '`, std_prefix, `/src/std/algebra.mjs';
import Bool, {negate} from '`, std_prefix, `/src/std/bool.mjs';
import Collection, {at, len, empty__q, has__q, delete__b} from '`, std_prefix, `/src/std/collection.mjs';
import OrderedSequence, {first} from '`, std_prefix, `/src/std/ordered_sequence.mjs';
import {inc, InclusiveRange, ExclusiveRange, InclusiveRangeNoMaximum, InclusiveRangeNoMinimum, ExclusiveRangeNoMaximum, ExclusiveRangeNoMinimum} from '`, std_prefix, `/src/std/range.mjs';
import Record, {keys, values} from '`, std_prefix, `/src/std/record.mjs';
import Underscore, {_} from '`, std_prefix, `/src/std/underscore.mjs';
`);
return imports[Algebra["+"]](js);};
export default compile;
