from flask import Blueprint, request, jsonify
from app.service.user_service import UserService


user_bp = Blueprint("user", __name__, url_prefix="/user")


@user_bp.route("", methods=["GET"])
def listar_user():
    usuario = UserService.listar()
    return jsonify({"usuario": usuario}), 200

@user_bp.route("", methods=["POST"])
def criar_user():
    dados = request.get_json()

    usuario = UserService.criar(dados)
    return jsonify({"usuario": usuario}), 201

@user_bp.route("/<int:id>", methods=["PUT"])
def atualizar_user(id):
    dados = request.get_json()

    usuario = UserService.atualizar(dados, id)
    if not usuario:
        return jsonify({"error": "Usuário não encontrado."}), 404
    return jsonify({"usuario": usuario}), 200

@user_bp.route("/<int:id>", methods=["DELETE"])
def deletar_user(id):
    if not UserService.deletar(id):
        return jsonify({"error": "Usuário não encontrado."}), 404

    return "", 204