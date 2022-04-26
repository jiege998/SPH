import vue from 'vue'
import veeValiDate from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN'
vue.use(veeValiDate)
veeValiDate.Validator.localize('zh_CN',{
    message:{
        ...zh_CN.message,
        is:(field) => `${field}必须与密码相同`,
    },
    attributes:{
        phone:'手机号',
        code:'验证码',
        password:'密码',
        password1:'确认密码',
        agree:'协议'
    }

})
//自定义校验规则
veeValiDate.Validator.extend("agree",{
    validate:(value) =>{
        return value
    },
    getMessage:(field)=>field +"必须同意"
})