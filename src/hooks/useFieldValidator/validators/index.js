import isNotEmpty from './isNotEmpty';
import isValidEmail from './isValidEmail';

const validators = {
    isNotEmpty,
    isValidEmail
};

const RULES = (() => {
    return Object.keys(validators).reduce(
        (accum, curr) => ({ ...accum, [curr]: curr }),
        {}
    );
})();

export { RULES };

export default validators;
