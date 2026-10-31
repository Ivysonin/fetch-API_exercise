banco_dados = []
contador_id = 1


class UserService:

    @staticmethod
    def listar():
        global banco_dados

        return banco_dados

    @staticmethod
    def criar(dados):
        """
        dados = {
            "id": contador_id,
            "nome": "ivyson",
            "idade": "18"
        }
        """

        global banco_dados, contador_id

        user = {
            "id": contador_id,
            "nome": dados.get("nome"),
            "idade": dados.get("idade")
        }
        banco_dados.append(user)
        contador_id += 1

        return user

    @staticmethod
    def atualizar(dados, id):
        """
        dados = {
            "id": 1,
            "nome": "ivyson",
            "idade": "18"
        }
        """

        global banco_dados

        for user in banco_dados:
            if user["id"] == id:
                if dados.get("nome"):
                    user["nome"] = dados.get("nome")
                if dados.get("idade"):
                    user["idade"] = dados.get("idade")
                return user
        return None
        
    @staticmethod
    def deletar(id):
        """
        dados = {
            "id": 1
        }
        """
        global banco_dados

        for i, user in enumerate(banco_dados):
            if user["id"] == id:
                del banco_dados[i]
                return True
        return False