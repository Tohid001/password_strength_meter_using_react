export const calculatePasswordStrength = (password) => {
  const weaknesses = [];

  weaknesses.push(lowercaseWeakness(password));
  weaknesses.push(uppercaseWeakness(password));
  weaknesses.push(numberWeakness(password));
  weaknesses.push(specialCharactersWeakness(password));
  weaknesses.push(lengthWeakness(password));
  weaknesses.push(repeatCharactersWeakness(password));
  return weaknesses.filter((element) => element);
};

function lengthWeakness(password) {
  const length = password.length;

  if (length <= 5) {
    return {
      message: "Your password is too short",
      score: 20,
    };
  }

  if (length <= 10) {
    return {
      message: "Your password could be longer",
      score: 20,
    };
  }
}

function uppercaseWeakness(password) {
  return characterTypeWeakness(password, /[A-Z]/g, "uppercase characters");
}

function lowercaseWeakness(password) {
  return characterTypeWeakness(password, /[a-z]/g, "lowercase characters");
}

function numberWeakness(password) {
  return characterTypeWeakness(password, /[0-9]/g, "numbers");
}

function specialCharactersWeakness(password) {
  return characterTypeWeakness(
    password,
    /[^0-9a-zA-Z\s]/g,
    "special characters"
  );
}

function characterTypeWeakness(password, regex, type) {
  const matches = password.match(regex) || [];

  if (matches.length === 0) {
    return {
      message: `Your password has no ${type}`,
      score: 20,
    };
  }

  if (matches.length < 2) {
    console.log(matches);
    return {
      message: `Your password could use more ${type}`,
      score: 20,
    };
  }
}

function repeatCharactersWeakness(password) {
  const matches = password.match(/(.)\1/g) || [];

  if (!password) {
    return;
  }
  if (matches.length > 0) {
    return {
      message: "Your password has repeat characters",
      score: 20,
    };
  }
}
