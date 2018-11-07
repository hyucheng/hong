import * as validators from './validators';

const [MASK, DEFAULT, REQUIR] = ['key', '@', 'required'];

const getLabel = label => `请输入${label}`;

const toQ = key => key == DEFAULT ? REQUIR : key;

const formatRules = (rulesOption, formRules, label) => {
  formRules == DEFAULT && (formRules = [formRules]);
  if(!Array.isArray(formRules)) return;
  const newRules = [];
  formRules.forEach(item => {
    let rule;
    item = toQ(item);
    if(item === REQUIR){
      rule = {
        ...rulesOption[item],
        message: getLabel(label)
      };
    } else if(typeof item === 'string'){
      rule = {
        ...rulesOption[item]
      };
    } else if(MASK in item){
      const key = toQ(item[MASK]);
      rule = {
        ...rulesOption[key],
        ...item
      };
    } else{
      rule = item;
    }
    delete rule[MASK];
    newRules.push(rule);
  });
  return newRules.length == 1 ?
    newRules[0] :
    newRules
};

export const GetRules = ({ state }, [formRules, formOption]) => {
  if(!formRules || !formOption) return;
  formOption.column.forEach(item => {
    const {
      label,
      prop
    } = item;
    if(prop in formRules){
      const rules = formatRules(state.rules, formRules[prop], label);
      rules && (formRules[prop] = rules);
    }
  });
};

export const baseRules = {
  required: { required: true, trigger: 'blur' },
  max3: { trigger: 'blur', validator: validators.max3 },
  checkPhone: { trigger: 'blur', validator: validators.checkPhone },
  checkIP: { trigger: 'blur', validator: validators.checkIP },
  checkEmail: { trigger:'blur',validator: validators.checkEmail},
  checkCode: { trigger:'blur',validator: validators.checkCode},
  checkSemVer: {trigger: 'blur', validator: validators.checkSemVer},
  checkAddressUrl: { trigger: 'blur', validator: validators.addressUrl }
};

/*
  3）form.vue 中，由于是在子组件对 rules 进行操作，不会同步到父组件中（不能做深层 rules 操作）（如果不是在子组件对 rules 进行操作?????）
*/
