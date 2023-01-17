import { readFileSync } from 'fs';
import { join } from 'path';

const sort_string = (str: string): string => str.toLowerCase().split('').sort().join('').replace("\r", "")

const word_list = (filename: string) => {
  const result = readFileSync(join(__dirname, filename), 'utf-8');
  
  const split_str = result.split("\n");

  return split_str;
}

const get_anagrams = (strs: string[]): string[][] => {
	const anagram_map = new Map<string, string[]>();

  strs.map(s => {
      const k = sort_string(s);
      anagram_map.set(k, [...(anagram_map.get(k) || []), s]);
  })

	return Array.from(anagram_map.values());
}

const print_anagrams = (str_arr: string[][]) => {
  let res = str_arr.map((r: string[]) => {
    let str = r.join(" ")
    return str
  });

  console.log(res)
}

print_anagrams(get_anagrams(word_list('./anagram.txt')))
