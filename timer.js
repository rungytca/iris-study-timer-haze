const PROJECT = "iris-study-timer-haze";
const PROFILE = "0012";
function run(value = 'ready') {
  return { project: PROJECT, profile: PROFILE, value };
}
console.log(run());
