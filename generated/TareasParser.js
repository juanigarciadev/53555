// Generated from c:/Users/Juani/Desktop/proyectos/53555/tareas/Tareas.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TareasListener from './TareasListener.js';
import TareasVisitor from './TareasVisitor.js';

const serializedATN = [4,1,19,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,1,1,1,1,3,1,30,8,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,41,8,3,10,
3,12,3,44,9,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,
6,5,6,61,8,6,10,6,12,6,64,9,6,1,7,1,7,3,7,68,8,7,1,7,0,0,8,0,2,4,6,8,10,
12,14,0,2,1,0,1,4,1,0,14,15,67,0,16,1,0,0,0,2,29,1,0,0,0,4,31,1,0,0,0,6,
36,1,0,0,0,8,47,1,0,0,0,10,53,1,0,0,0,12,57,1,0,0,0,14,67,1,0,0,0,16,17,
5,5,0,0,17,21,5,8,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,
0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,0,24,25,5,9,0,0,25,1,1,0,0,
0,26,30,3,4,2,0,27,30,3,6,3,0,28,30,3,8,4,0,29,26,1,0,0,0,29,27,1,0,0,0,
29,28,1,0,0,0,30,3,1,0,0,0,31,32,5,17,0,0,32,33,5,12,0,0,33,34,3,12,6,0,
34,35,5,13,0,0,35,5,1,0,0,0,36,37,5,6,0,0,37,38,3,10,5,0,38,42,5,8,0,0,39,
41,3,2,1,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,45,
1,0,0,0,44,42,1,0,0,0,45,46,5,9,0,0,46,7,1,0,0,0,47,48,5,7,0,0,48,49,5,10,
0,0,49,50,3,12,6,0,50,51,5,11,0,0,51,52,5,13,0,0,52,9,1,0,0,0,53,54,3,12,
6,0,54,55,7,0,0,0,55,56,3,12,6,0,56,11,1,0,0,0,57,62,3,14,7,0,58,59,7,1,
0,0,59,61,3,14,7,0,60,58,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,
0,63,13,1,0,0,0,64,62,1,0,0,0,65,68,5,18,0,0,66,68,5,17,0,0,67,65,1,0,0,
0,67,66,1,0,0,0,68,15,1,0,0,0,5,21,29,42,62,67];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TareasParser extends antlr4.Parser {

    static grammarFileName = "Tareas.g4";
    static literalNames = [ null, "'=='", "'!='", "'>'", "'<'", "'tareas'", 
                            "'si'", "'mostrar'", "'{'", "'}'", "'('", "')'", 
                            "'='", "';'", "'+'", "'-'" ];
    static symbolicNames = [ null, null, null, null, null, "TAREAS", "SI", 
                             "MOSTRAR", "LBRACE", "RBRACE", "LPAR", "RPAR", 
                             "ASSIGN", "SEMI", "PLUS", "MINUS", "COMP", 
                             "ID", "NUMBER", "WS" ];
    static ruleNames = [ "programa", "instruccion", "asignacion", "condicional", 
                         "imprimir", "condicion", "expresion", "termino" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TareasParser.ruleNames;
        this.literalNames = TareasParser.literalNames;
        this.symbolicNames = TareasParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TareasParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(TareasParser.TAREAS);
	        this.state = 17;
	        this.match(TareasParser.LBRACE);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 131264) !== 0)) {
	            this.state = 18;
	            this.instruccion();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.match(TareasParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TareasParser.RULE_instruccion);
	    try {
	        this.state = 29;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.asignacion();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.condicional();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.imprimir();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TareasParser.RULE_asignacion);
	    try {
	        localctx = new AssignContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(TareasParser.ID);
	        this.state = 32;
	        this.match(TareasParser.ASSIGN);
	        this.state = 33;
	        this.expresion();
	        this.state = 34;
	        this.match(TareasParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicional() {
	    let localctx = new CondicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TareasParser.RULE_condicional);
	    var _la = 0;
	    try {
	        localctx = new IfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(TareasParser.SI);
	        this.state = 37;
	        this.condicion();
	        this.state = 38;
	        this.match(TareasParser.LBRACE);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 131264) !== 0)) {
	            this.state = 39;
	            this.instruccion();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 45;
	        this.match(TareasParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	imprimir() {
	    let localctx = new ImprimirContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TareasParser.RULE_imprimir);
	    try {
	        localctx = new PrintContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(TareasParser.MOSTRAR);
	        this.state = 48;
	        this.match(TareasParser.LPAR);
	        this.state = 49;
	        this.expresion();
	        this.state = 50;
	        this.match(TareasParser.RPAR);
	        this.state = 51;
	        this.match(TareasParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TareasParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        localctx.left = this.expresion();
	        this.state = 54;
	        localctx.op = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 30) !== 0))) {
	            localctx.op = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 55;
	        localctx.right = this.expresion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TareasParser.RULE_expresion);
	    var _la = 0;
	    try {
	        localctx = new ExprContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.termino();
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14 || _la===15) {
	            this.state = 58;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 59;
	            this.termino();
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termino() {
	    let localctx = new TerminoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TareasParser.RULE_termino);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            localctx = new NumContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.match(TareasParser.NUMBER);
	            break;
	        case 17:
	            localctx = new IdContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.match(TareasParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TareasParser.EOF = antlr4.Token.EOF;
TareasParser.T__0 = 1;
TareasParser.T__1 = 2;
TareasParser.T__2 = 3;
TareasParser.T__3 = 4;
TareasParser.TAREAS = 5;
TareasParser.SI = 6;
TareasParser.MOSTRAR = 7;
TareasParser.LBRACE = 8;
TareasParser.RBRACE = 9;
TareasParser.LPAR = 10;
TareasParser.RPAR = 11;
TareasParser.ASSIGN = 12;
TareasParser.SEMI = 13;
TareasParser.PLUS = 14;
TareasParser.MINUS = 15;
TareasParser.COMP = 16;
TareasParser.ID = 17;
TareasParser.NUMBER = 18;
TareasParser.WS = 19;

TareasParser.RULE_programa = 0;
TareasParser.RULE_instruccion = 1;
TareasParser.RULE_asignacion = 2;
TareasParser.RULE_condicional = 3;
TareasParser.RULE_imprimir = 4;
TareasParser.RULE_condicion = 5;
TareasParser.RULE_expresion = 6;
TareasParser.RULE_termino = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_programa;
    }

	TAREAS() {
	    return this.getToken(TareasParser.TAREAS, 0);
	};

	LBRACE() {
	    return this.getToken(TareasParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(TareasParser.RBRACE, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_instruccion;
    }

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	condicional() {
	    return this.getTypedRuleContext(CondicionalContext,0);
	};

	imprimir() {
	    return this.getTypedRuleContext(ImprimirContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_asignacion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AssignContext extends AsignacionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(TareasParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(TareasParser.ASSIGN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	SEMI() {
	    return this.getToken(TareasParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TareasParser.AssignContext = AssignContext;

class CondicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_condicional;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IfContext extends CondicionalContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SI() {
	    return this.getToken(TareasParser.SI, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	LBRACE() {
	    return this.getToken(TareasParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(TareasParser.RBRACE, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterIf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitIf(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TareasParser.IfContext = IfContext;

class ImprimirContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_imprimir;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PrintContext extends ImprimirContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MOSTRAR() {
	    return this.getToken(TareasParser.MOSTRAR, 0);
	};

	LPAR() {
	    return this.getToken(TareasParser.LPAR, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	RPAR() {
	    return this.getToken(TareasParser.RPAR, 0);
	};

	SEMI() {
	    return this.getToken(TareasParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterPrint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitPrint(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitPrint(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TareasParser.PrintContext = PrintContext;

class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_condicion;
        this.left = null;
        this.op = null;
        this.right = null;
    }

	expresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpresionContext);
	    } else {
	        return this.getTypedRuleContext(ExpresionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_expresion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ExprContext extends ExpresionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	termino = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminoContext);
	    } else {
	        return this.getTypedRuleContext(TerminoContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TareasParser.PLUS);
	    } else {
	        return this.getToken(TareasParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TareasParser.MINUS);
	    } else {
	        return this.getToken(TareasParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TareasParser.ExprContext = ExprContext;

class TerminoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TareasParser.RULE_termino;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NumContext extends TerminoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(TareasParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TareasParser.NumContext = NumContext;

class IdContext extends TerminoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(TareasParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TareasListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TareasVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TareasParser.IdContext = IdContext;


TareasParser.ProgramaContext = ProgramaContext; 
TareasParser.InstruccionContext = InstruccionContext; 
TareasParser.AsignacionContext = AsignacionContext; 
TareasParser.CondicionalContext = CondicionalContext; 
TareasParser.ImprimirContext = ImprimirContext; 
TareasParser.CondicionContext = CondicionContext; 
TareasParser.ExpresionContext = ExpresionContext; 
TareasParser.TerminoContext = TerminoContext; 
