(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{22:function(e,t,n){"use strict";n.r(t);var c,r=n(1),a=n.n(r),o=n(4),i=n.n(o),s=n(5),d=n(6),b=n(7),u=n(12),l=n(11),j=n(8),h=n(10).a.button(c||(c=Object(j.a)(["\nmargin-right: 5px;\nbackground-color: white;\nborder: 1px solid grey;\nborder-radius: 10%;\n&:hover{\n    background-color: #63c5da;\n}\n"]))),O=n(0);function p(e){var t=e.options,n=e.onButtonClick;return t.map((function(e){var t=e.replace(e[0],e[0].toUpperCase());return Object(O.jsx)(h,{type:"button",onClick:function(){return n(e)},children:t},e)}))}function v(e){var t=e.title,n=e.children;return Object(O.jsxs)("section",{children:[Object(O.jsx)("h2",{children:t}),n]})}function k(e){var t=e.good,n=e.neutral,c=e.bad,r=e.total,a=e.positiveFeedback;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{children:["Good: ",t]}),Object(O.jsxs)("p",{children:["Neutral: ",n]}),Object(O.jsxs)("p",{children:["Bad: ",c]}),Object(O.jsxs)("p",{children:["Total: ",r]}),Object(O.jsxs)("p",{children:["Positive feedback: ",a,"%"]})]})}function f(e){var t=e.message;return Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:t})})}n(3);var g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.FeedbackOptions=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.CountTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.CountPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.CountTotalFeedback();return Math.round(t/n*100)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,r=this.FeedbackOptions,a=this.CountTotalFeedback,o=this.CountPositiveFeedbackPercentage;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(v,{title:"Please leave your feedback",children:Object(O.jsx)(p,{options:Object.keys(this.state),onButtonClick:r})}),Object(O.jsxs)(v,{title:"Statistics",children:[a()>0&&Object(O.jsx)(k,{good:t,neutral:n,bad:c,total:a(),positiveFeedback:o()}),0===a()&&Object(O.jsx)(f,{message:"No feedback given"})]})]})}}]),n}(r.Component);i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))},3:function(e,t,n){}},[[22,1,2]]]);
//# sourceMappingURL=main.79f7b651.chunk.js.map