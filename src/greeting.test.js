import { greeting } from "./greeting"; // colocation

it("greeting returns greeting with name", () => {
  //given -- vorbedingungen / was gebe ich rein
  const name = "Felix";
  const expected = "hello friend, Felix";

  //when -- was ich testen will / welcher ablauf
  const actual = greeting(name);

  //then -- nachbedingung / was bekomme ich raus
  expect(actual).toBe(expected);
});

it("prints out hello friend if person is known", () => {
  //given -- vorbedingungen / was gebe ich rein
  const name = "Mareike";
  const expected = "hello friend, Mareike";

  //when -- was ich testen will / welcher ablauf
  const actual = greeting(name);

  //then -- nachbedingung / was bekomme ich raus
  expect(actual).toBe(expected);
});

it("prints out hello stranger for unknown person", () => {
  //given -- vorbedingungen / was gebe ich rein
  const name = "Jessica";
  const expected = "hello stranger, Jessica";

  //when -- was ich testen will / welcher ablauf
  const actual = greeting(name);

  //then -- nachbedingung / was bekomme ich raus
  expect(actual).toBe(expected);
});
