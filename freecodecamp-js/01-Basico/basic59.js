/* Comparação com o operador de igualdade estrita.

Igualdade estrita (===) é a contraparte do operador de igualdade (==).
No entanto, ao contrário do operador de igualdade, que tenta converter os dois valores sendo comparados a um tipo comum, 
o operador de igualdade estrita não executa uma conversão de tipo.

Se os valores comparados tiverem tipos diferentes, eles serão considerados desiguais e o operador de igualdade estrita 
retornará falso.

3 === 3 // verdadeiro
3 === '3' // falso

Use o operador de igualdade estrita na instrução if para que a função retorne "Equal" quando val for estritamente igual a 7.
EXERCÍCIO RESOLVIDO ABAIXO: */ 

    function testStrict(val) {
        if (val === 7) { // Change this line
        return "Equal";
        }
        return "Not Equal";
    }
    
    testStrict(10);