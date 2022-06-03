const redux = require ('redux')

const realizarVestibular = (nome, cpf) => {
  const entre6E10 = Math.random() <= 0.7
  const nota = entre6E10 ? 6 + Math.random() * 4 : Math.random() + 5
  return {
    //para ser uma ação é type
    type: "REALIZAR_VESTIBULAR",
    payload: {
      nome, cpf, nota 
    }

  }
}

const realizarMatricular = (cpf, status) => {
  return {
    type: "REALIZAR_MATRICULA",
    payload: {
      cpf, status
    }
  }
}

//cada reducer nunca recebe o estado inteiro , não há estado compartilhado entre reducers
//se não existir um return fora do if, volta undefined
const historicoVestibular = (historicoVestibularAtual = [], acao) => {
  if (acao.type === "REALIZAR_VESTIBULAR"){
    return [...historicoVestibularAtual, acao.payload]
  }
  return historicoVestibularAtual
}

const historicoMatriculas = (historicoMatriculasAtual = [], acao) => {
  if (acao.type === "REALIZAR_MATRICULA"){
    return [...historicoMatriculasAtual, acao.payload]
  }
  return historicoMatriculasAtual
}

const todosOsReducers = redux.combineReducers({
  historicoMatriculas,
  historicoVestibular
})

const store = redux.createStore(todosOsReducers)

const main = async () => {
  
}