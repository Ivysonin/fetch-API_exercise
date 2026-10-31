from flask import Flask
from app.config import Config


def create_app():
    app = Flask(__name__)
    
    app.config.from_object(Config)
    
    from app.controllers.page_controller import page_bp
    from app.controllers.user_controller import user_bp
    app.register_blueprint(user_bp)
    app.register_blueprint(page_bp)
    
    return app