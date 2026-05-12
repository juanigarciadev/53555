grammar Tareas;

// --- REGLAS SINTÁCTICAS ---
programa     : 'tareas' '{' instruccion* '}' ;
instruccion  : asignacion | condicional | imprimir ;
asignacion   : ID '=' expresion ';'                 # Assign ;
condicional  : 'si' condicion '{' instruccion* '}'  # If ;
imprimir     : 'mostrar' '(' expresion ')' ';'      # Print ;
condicion    : left=expresion op=('==' | '!=' | '>' | '<') right=expresion ;
expresion    : termino (op=('+' | '-') termino)* # Expr ;
termino      : NUMBER                               # Num
             | ID                                   # Id
             ;

// --- REGLAS LÉXICAS (Agregá estos nombres) ---
TAREAS  : 'tareas' ;
SI      : 'si' ;
MOSTRAR : 'mostrar' ;
LBRACE  : '{' ;
RBRACE  : '}' ;
LPAR    : '(' ;
RPAR    : ')' ;
ASSIGN  : '=' ;
SEMI    : ';' ;
PLUS    : '+' ;
MINUS   : '-' ;
COMP    : '==' | '!=' | '>' | '<' ;

ID      : [a-zA-Z]+ ;
NUMBER  : [0-9]+ ;
WS      : [ \t\r\n]+ -> skip ;