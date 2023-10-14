import { createElement, Fragment } from 'react';

var R=0,k=1,j=2;var D=new Set(["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),x=new Set(["script","style"]),_=/([\@\.a-z0-9_\:\-]*)\s*?=?\s*?(['"]?)([\s\S]*?)\2\s+/gim,o=/(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:-]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!)([\s\S]*?)(>))/gm;function P(e){let t={},a;if(e)for(_.lastIndex=0,e=" "+(e||"")+" ";a=_.exec(e);)a[0]!==" "&&(t[a[1]]=a[3]);return t}function w(e){let t=typeof e=="string"?e:e.value,a,r,n,i,l,d,g,h,s,c=[];o.lastIndex=0,r=a={type:0,children:[]};let E=0;function m(){i=t.substring(E,o.lastIndex-n[0].length),i&&r.children.push({type:2,value:i,parent:r});}for(;n=o.exec(t);){if(d=n[5]||n[8],g=n[6]||n[9],h=n[7]||n[10],x.has(r.name)&&n[2]!==r.name){l=o.lastIndex-n[0].length,r.children.length>0&&(r.children[0].value+=n[0]);continue}else if(d==="<!--"){if(l=o.lastIndex-n[0].length,x.has(r.name))continue;s={type:3,value:g,parent:r,loc:[{start:l,end:l+d.length},{start:o.lastIndex-h.length,end:o.lastIndex}]},c.push(s),s.parent.children.push(s);}else if(d==="<!")l=o.lastIndex-n[0].length,s={type:4,value:g,parent:r,loc:[{start:l,end:l+d.length},{start:o.lastIndex-h.length,end:o.lastIndex}]},c.push(s),s.parent.children.push(s);else if(n[1]!=="/")if(m(),x.has(r.name)){E=o.lastIndex,m();continue}else s={type:1,name:n[2]+"",attributes:P(n[3]),parent:r,children:[],loc:[{start:o.lastIndex-n[0].length,end:o.lastIndex}]},c.push(s),s.parent.children.push(s),n[4]&&n[4].indexOf("/")>-1||D.has(s.name)?(s.loc[1]=s.loc[0],s.isSelfClosingTag=!0):r=s;else m(),n[2]+""===r.name?(s=r,r=s.parent,s.loc.push({start:o.lastIndex-n[0].length,end:o.lastIndex}),i=t.substring(s.loc[0].end,s.loc[1].start),s.children.length===0&&s.children.push({type:2,value:i,parent:r})):n[2]+""===c[c.length-1].name&&c[c.length-1].isSelfClosingTag===!0&&(s=c[c.length-1],s.loc.push({start:o.lastIndex-n[0].length,end:o.lastIndex}));E=o.lastIndex;}return i=t.slice(E),r.children.push({type:2,value:i,parent:r}),a}var O=class{constructor(t){this.callback=t;}visit(t,a,r){if(this.callback(t,a,r),Array.isArray(t.children))for(let n=0;n<t.children.length;n++){let i=t.children[n];this.visit(i,t,n);}}};function z(e,t){return new O(t).visit(e)}

let ids = 0;
function convert(children) {
	const nodeMap = new WeakMap();
	let doc = w(children.toString().trim());
	let id = ids++;
	let key = 0;
	let root = createElement(Fragment, { children: [] });

	z(doc, (node, parent, index) => {
		let newNode = {};
		if (node.type === R) {
			nodeMap.set(node, root);
		} else if (node.type === k) {
			const { class: className, ...props } = node.attributes;
			// NOTE: do not manually pass `children`, React handles this internally
			newNode = createElement(node.name, { ...props, className, key: `${id}-${key++}` });
			nodeMap.set(node, newNode);
			if (parent) {
				const newParent = nodeMap.get(parent);
				newParent.props.children[index] = newNode;
			}
		} else if (node.type === j) {
			newNode = node.value;
			if (newNode.trim() && parent) {
				const newParent = nodeMap.get(parent);
				newParent.props.children[index] = newNode;
			}
		}
	});

	return root.props.children;
}

export { convert as default };
