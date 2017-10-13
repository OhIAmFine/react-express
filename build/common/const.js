// 表单默认样式
export const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    }
};

// 行内表单默认样式
export const formInlineItemLayout = {
    labelCol: {
        span: 5
    },
    wrapperCol: {
        span: 19
    }
};

// 按钮样式
export const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 14,
            offset: 6,
        },
    }
};

// 地址前缀
export const pathPrefix = '/client';

// 日期标准格式
export const dateFormat = 'YYYY-MM-DD HH:mm:ss';
export const dateFormatOnlyDate = 'YYYY-MM-DD';

// 自动完成插件延时时间
export const autocompleteTimeout = 500;