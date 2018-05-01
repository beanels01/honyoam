function Container(){
}
Container.prototype[Symbol.iterator]=function*(){
    while(this.size)
        yield this.out();
};
Container.iterator=c=>Container.prototype[Symbol.iterator].call(c);

function CompoundArrayContainer(){
    Container.call(this);
    this._a=[];
}
Object.setPrototypeOf(
    CompoundArrayContainer.prototype,
    Container.prototype
);
CompoundArrayContainer.prototype.in=function(){
    this._a.push(...arguments);
};
CompoundArrayContainer.prototype.out=function(){
    return this._a.pop()
};
Object.defineProperty(CompoundArrayContainer.prototype,'size',{get(){
    return this._a.length
}});

function DecalarativeSet(){
    this._set=new Set;
}
DecalarativeSet.prototype.in=function(doc){
    this._set.add(doc);
    if(this._forEach)
        this._forEach.in(doc);
};
DecalarativeSet.prototype.out=function(doc){
    this._set.delete(doc);
    if(this._forEach)
        this._forEach.out(doc);
};
Object.defineProperty(DecalarativeSet.prototype,'forEach',{set(doc){
    if(this._forEach)
        this._set.forEach(this._forEach.out);
    this._forEach=doc;
    if(this._forEach)
        this._set.forEach(this._forEach.in);
}});

function VertexEdgeArray(){
    this._vertices=[];
    this._edges=[];
}
Object.defineProperty(VertexEdgeArray.prototype,'vertices',{get(){
    return this._vertices.slice()
}});
Object.defineProperty(VertexEdgeArray.prototype,'edges',{get(){
    return this._edges.slice()
}});
VertexEdgeArray.prototype.addVertex=function(v=Symbol()){
    this._vertices.push(v);
    return v
};
VertexEdgeArray.prototype.addEdge=function(v,w){
    let e=[v,w];
    this._edges.push(e);
};

function Stack(){
    CompoundArrayContainer.call(this);
}
Object.setPrototypeOf(
    Stack.prototype,
    CompoundArrayContainer.prototype
);

function DirectedGraph(DataStructure=VertexEdgeArray){
    this._DataStructure=VertexEdgeArray;
    this._data=new this._DataStructure;
}
Object.defineProperty(DirectedGraph.prototype,'vertices',{get(){
    return this._data.vertices.slice()
}});
Object.defineProperty(DirectedGraph.prototype,'edges',{get(){
    return this._data.edges.slice()
}});
DirectedGraph.prototype.addVertex=function(v){
    return this._data.addVertex(v)
};
DirectedGraph.prototype.addEdge=function(v,w){
    this._data.addEdge(v,w);
};
DirectedGraph.prototype.longestTopologicalSort=function(c=new Stack){
    let id={},arc={};
    for(let v of this._data.vertices){
        id[v]=0;
        arc[v]=[];
    }
    for(let[v,w]of this._data.edges){
        id[w]++;
        arc[v].push(w);
    }
    let res=[];
    for(let v of this._data.vertices.filter(v=>id[v]==0))
        c.in(v);
    for(let v of Container.iterator(c)){
        res.push(v);
        arc[v].map(w=>--id[w]||c.in(w));
    }
    return res
};
Object.defineProperty(DirectedGraph.prototype,'topologicalSort',{get(){
    let a=this.longestTopologicalSort();
    if(a.length<this._data.vertices.length)
        throw Error('Cycle detected.')
    return a
}});

function EventEmmiter(){
    this._listeners={};
}
EventEmmiter.prototype._keyExist=function(key){
    return key in this._listeners
};
EventEmmiter.prototype._ensureKeyExist=function(key){
    if(!(key in this._listeners))
        this._listeners[key]=new Map;
};
EventEmmiter.prototype.emit=function(key,event){
    if(!this._keyExist(key))
        return
    for(let[listener,doc]of[...this._listeners[key].entries()]){
        if(doc.once)
            this.off(key,listener);
        listener(event);
    }
};
EventEmmiter.prototype.off=function(key,listener){
    if(!this._keyExist(key))
        return
    this._listeners[key].delete(listener);
};
EventEmmiter.prototype.on=function(key,listener){
    this._ensureKeyExist(key);
    this._listeners[key].set(listener,{once:false});
};
EventEmmiter.prototype.once=function(key,listener){
    this._ensureKeyExist(key);
    this._listeners[key].set(listener,{once:true});
};

function IntegerBinarySearch(head,tail){
    this._head=head;
    this._tail=tail;
}
Object.defineProperty(IntegerBinarySearch.prototype,'ask',{get(){
    return this._head!=this._tail
}});
Object.defineProperty(IntegerBinarySearch.prototype,'in',{set(val){
    if(val)
        this._tail=this.out;
    else
        this._head=this.out+1;
}});
Object.defineProperty(IntegerBinarySearch.prototype,'out',{get(){
    return~~((this._head+this._tail)/2)
}});

function List(){
    this.length=0;
    this._head={};
    this._tail={};
    this._head.next=this._tail;
    this._tail.previous=this._head;
}
List.prototype.append=function(key){
    return this.insert(this.tail,key)
};
Object.defineProperty(List.prototype,'head',{get(){
    return this._head.next
}});
List.prototype.insert=function(n,key){
    this.length++;
    return n.previous=n.previous.next={
        previous:n.previous,
        next:n,
        key,
    }
};
List.prototype.out=function(n){
    this.length--;
    n.previous.next=n.next;
    n.next.previous=n.previous;
    return n.next
};
Object.defineProperty(List.prototype,'tail',{get(){
    return this._tail
}});
List.prototype[Symbol.iterator]=function*(){
    for(let n=this.head;n.next;n=n.next)
        yield n.key;
};

/*
我在這裡設計過多型，但是比沒多型的版本慢四倍；這樣的效率在現在（2017-06-06）的處境下這是沒辦法接受的，只好寫成 add-addN 這個模樣。
These names (add, sub, mul, div) come from x86 instructions.
*/
function Pair(x=0,y=x){
    this.x=x;
    this.y=y;
}
Pair.prototype[Symbol.iterator]=function*(){
    yield*[this.x,this.y];
};
function NumberPair(){
    Pair.apply(this,arguments);
}
Object.setPrototypeOf(NumberPair,Pair);
Object.setPrototypeOf(NumberPair.prototype,Pair.prototype);
// a+b
NumberPair.prototype.add=function(v){
    this.x+=v.x;
    this.y+=v.y;
    return this
};
NumberPair.prototype.addN=function(x,y=x){
    this.x+=x;
    this.y+=y;
    return this
};
// a-b
NumberPair.prototype.sub=function(v){
    this.x-=v.x;
    this.y-=v.y;
    return this
};
NumberPair.prototype.subN=function(x,y=x){
    this.x-=x;
    this.y-=y;
    return this
};
// a*b
NumberPair.prototype.mul=function(v){
    this.x*=v.x;
    this.y*=v.y;
    return this
};
NumberPair.prototype.mulN=function(x,y=x){
    this.x*=x;
    this.y*=y;
    return this
};
// a/b
NumberPair.prototype.div=function(v){
    this.x/=v.x;
    this.y/=v.y;
    return this
};
NumberPair.prototype.divN=function(x,y=x){
    this.x/=x;
    this.y/=y;
    return this
};
// a<b
NumberPair.prototype.lt=function(v){
    return this.x<v.x&&this.y<v.y
};
NumberPair.prototype.ltN=function(x,y){
    return this.x<x&&this.y<y
};
// a==b
NumberPair.prototype.eq=function(v){
    return this.x==v.x&&this.y==v.y
};
NumberPair.prototype.eqN=function(x,y){
    return this.x==x&&this.y==y
};
// a>b
NumberPair.prototype.gt=function(v){
    return this.x>v.x&&this.y>v.y
};
NumberPair.prototype.gtN=function(v){
    return this.x>v.x&&this.y>v.y
};
Object.defineProperty(NumberPair.prototype,'new',{get(){
    return new NumberPair(this.x,this.y)
}});
// -a: negetive
Object.defineProperty(NumberPair.prototype,'newNeg',{get(){
    return this.newMulN(-1)
}});
NumberPair.prototype.newAdd=function(v){
    return new NumberPair(this.x+v.x,this.y+v.y)
};
NumberPair.prototype.newAddN=function(x,y=x){
    return new NumberPair(this.x+x,this.y+y)
};
NumberPair.prototype.newSub=function(v){
    return new NumberPair(this.x-v.x,this.y-v.y)
};
NumberPair.prototype.newSubN=function(x,y=x){
    return new NumberPair(this.x-x,this.y-y)
};
NumberPair.prototype.newMul=function(v){
    return new NumberPair(this.x*v.x,this.y*v.y)
};
NumberPair.prototype.newMulN=function(x,y=x){
    return new NumberPair(this.x*x,this.y*y)
};
NumberPair.prototype.newDiv=function(v){
    return new NumberPair(this.x/v.x,this.y/v.y)
};
NumberPair.prototype.newDivN=function(x,y=x){
    return new NumberPair(this.x/x,this.y/y)
};

function PriorityQueue(cmp){
    CompoundArrayContainer.call(this);
    this._cmp=cmp||((a,b)=>a-b);
}
Object.setPrototypeOf(
    PriorityQueue.prototype,
    CompoundArrayContainer.prototype
);
PriorityQueue.prototype.in=function(){
    for(let i=0;i<arguments.length;i++){let e=arguments[i];
        this._a.push(e);
        for(let i=this._a.length-1,p;i;i=p){
            p=~~((i-1)/2);
            if(this._cmp(this._a[i],this._a[p])<0)
                [this._a[i],this._a[p]]=[this._a[p],this._a[i]];
        }
    }
};
PriorityQueue.prototype.out=function(){
    let e=this._a[0];
    this._a[0]=this._a[this._a.length-1];
    this._a.pop();
    for(let i=0;2*i+1<this._a.length;){
        let min=
            this._a.length<=2*i+2||
            this._cmp(this._a[2*i+1],this._a[2*i+2])<0
        ?
            2*i+1
        :
            2*i+2;
        if(this._cmp(this._a[i],this._a[min])<0)
            break
        ;[this._a[i],this._a[min]]=[this._a[min],this._a[i]];
        i=min;
    }
    return e
};
Object.defineProperty(PriorityQueue.prototype,'top',{get(){
    return this._a[0]
}});

function Queue(){
    CompoundArrayContainer.call(this);
}
Object.setPrototypeOf(
    Queue.prototype,
    CompoundArrayContainer.prototype
);
Queue.prototype.out=function(){
    return this._a.shift()
};

function Range(){
    NumberPair.apply(this,arguments);
}
Object.setPrototypeOf(Range,NumberPair);
Object.setPrototypeOf(Range.prototype,NumberPair.prototype);
// length
Object.defineProperty(Range.prototype,'len',{get(v){
    return Math.max(0,this.y-this.x)
}});
Range.prototype.valueOf=function(){
    return Math.max(0,this.y-this.x)
};
Range.prototype.intersect=function(){
    let a=[...arguments];
    this.x=Math.max(this.x,...a.map(r=>r.x));
    this.y=Math.min(this.y,...a.map(r=>r.y));
    return this
};
Range.prototype.newIntersect=function(){
    let a=[...arguments];
    return new Range(
        Math.max(this.x,...a.map(r=>r.x)),
        Math.min(this.y,...a.map(r=>r.y))
    )
};

function Vector2(){
    NumberPair.apply(this,arguments);
}
Object.setPrototypeOf(Vector2,NumberPair);
Object.setPrototypeOf(Vector2.prototype,NumberPair.prototype);
// inner product
Vector2.prototype.ip=function(v){
    return this.x*v.x+this.y*v.y
};
// length
Object.defineProperty(Vector2.prototype,'len',{get(v){
    return this.ip(this)**.5
}});
Vector2.prototype.valueOf=function(){
    return this.ip(this)**.5
};

function prefixSum(a){
    for(let i=1;i<a.length;i++)
        a[i]+=a[i-1];
    return a
}
function difference(a){
    for(let i=a.length-1;0<i;i--)
        a[i]-=a[i-1];
    return a
}
var array = {
    difference,
    prefixSum,
}

function dom(n){
    if(typeof n=='string')
        n=document.createElement(n);
    let p={
        function:f=>f(n),
        number,
        object,
        string,
    };
    transform([...arguments].slice(1));
    return n
    function transform(t){
        for(let q;q=p[typeof t];t=q(t));
    }
    function string(s){
        n.appendChild(document.createTextNode(s));
    }
    function number(n){
        string(n.toString());
    }
    function object(o){
        switch(true){
            case o instanceof Array:
                array();
                break
            case o instanceof Node:
                n.appendChild(o);
                break
            case o instanceof Promise:
                o.then(transform);
                break
            default:
                if(('length' in o)||o[Symbol.iterator]){
                    o=Array.from(o);
                    array();
                }else
                    Object.assign(n,o);
        }
        function array(){
            o.map(transform);
        }
    }
}
dom.tn=s=>document.createTextNode(s);
dom.html=function(){
    return dom(document.documentElement,...arguments)
};
dom.head=function(){
    return dom(document.head,...arguments)
};
dom.body=function(){
    return dom(document.body,...arguments)
};
var dom$1 = new Proxy(dom,{
    get:(t,p)=>p in dom||p=='then'?dom[p]:function(){
        return dom(p,...arguments)
    }
})

function arrayLowerBound(a,v,lt){
    return integerBinarySearch(i=>!lt(a[i],v),0,a.length)
}
function arrayUpperBound(a,v,lt){
    return integerBinarySearch(i=>lt(v,a[i]),0,a.length)
}
function integerBinarySearch(func,f,l){
    while(f-l){
        let m=~~((f+l)/2);
        if(func(m))
            l=m;
        else
            f=m+1;
    }
    return f
}
var integerBinarySearch$1 = Object.assign(
    integerBinarySearch,
    {arrayLowerBound,arrayUpperBound}
)

var path = {
    normalize(s){
        let res;
        if(s[0]=='/'){
            let a=[];
            for(let t of s.split('/')){
                if(t==''||t=='.')
                    continue
                if(t=='..'){
                    if(a.length)
                        a.pop();
                    continue
                }
                a.push(t);
            }
            res='/'+a.join('/')+(a.length&&s[s.length-1]=='/'?'/':'');
        }else{
            let a=[];
            for(let t of s.split('/')){
                if(t==''||t=='.')
                    continue
                if(t=='..'&&a.length){
                    a.pop();
                    continue
                }
                a.push(t);
            }
            res=(a.length?a.join('/'):'.')+(s[s.length-1]=='/'?'/':'');
        }
        return res
    },
}

let uri={};
uri.matchAbsoluteUri=function(s){
// from http://jmrware.com/articles/2009/uri_regexp/URI_regex.html
    return s.match(/[A-Za-z][A-Za-z0-9+\-.]*:(?:\/\/(?:(?:[A-Za-z0-9\-._~!$&'()*+,;=:]|%[0-9A-Fa-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}|::(?:[0-9A-Fa-f]{1,4}:){5}|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::)(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)|[Vv][0-9A-Fa-f]+\.[A-Za-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|(?:[A-Za-z0-9\-._~!$&'()*+,;=]|%[0-9A-Fa-f]{2})*)(?::[0-9]*)?(?:\/(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|\/(?:(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\/(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*)?|(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})+(?:\/(?:[A-Za-z0-9\-._~!$&'()*+,;=:@]|%[0-9A-Fa-f]{2})*)*|)(?:\?(?:[A-Za-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9A-Fa-f]{2})*)?(?:\#(?:[A-Za-z0-9\-._~!$&'()*+,;=:@\/?]|%[0-9A-Fa-f]{2})*)?/)
};

var simple = {
    Container,
    DecalarativeSet,
    DirectedGraph,
    EventEmmiter,
    IntegerBinarySearch,
    List,
    NumberPair,
    PriorityQueue,
    Range,
    Stack,
    Queue,
    Vector2,
    array,
    dom: dom$1,
    integerBinarySearch: integerBinarySearch$1,
    path,
    uri,
}

export default simple;
export { Container, DecalarativeSet, DirectedGraph, EventEmmiter, IntegerBinarySearch, List, NumberPair, PriorityQueue, Range, Stack, Queue, Vector2, array, dom$1 as dom, integerBinarySearch$1 as integerBinarySearch, path, uri };
