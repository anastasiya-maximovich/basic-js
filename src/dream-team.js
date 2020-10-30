module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) return false;

  let result = members
    .filter(member => typeof member == "string")
    .reduce((counter, member) => {
      counter.push(member.trim().toUpperCase()[0]);
      return counter;
    }, []);

  if (result.length >= 0) return result.sort().join("");

  return false;
};