from os import truncate
from sys import int_info
import flask
import vk_api
from decouple import config
from flask import Flask, render_template, request, g


my_id = config('my_id', default='')
token = config('token', default='')
session = vk_api.VkApi(token=token)

app = Flask(__name__)

tmp_id = '224816985'
lana_id = '306782067'
max_id = '290079193'
artem_id = '245284363'
andrey_id = '134212161'
kweall_id = '161816405'
dora_id = '224816985'




@app.route('/', methods=['POST', 'GET'])
def index():
    finded = False
    private = False
    try:
        user_id = request.form.get('id')
        finded = True
        global tmp_id
        if user_id == None or user_id == '0' or user_id == "":
            finded = False
            user_id = "224816985"
            tmp_id = user_id
        else:
            tmp_id = user_id
            
    except:
        finded = False
        user_id = "224816985"
    
    info = get_info_about_user(user_id)[0]
    try:
        if info['deactivated'] == 'deleted':
            deleted = True
            user_id = str(dora_id)
    except KeyError:
        deleted = False
    try:
        if info['is_closed'] == True:
            private = True
        else:
            private = False
    except:
        tmp_id = dora_id
    
    info = get_info_about_user(user_id)[0]
    
    status = get_user_status(user_id)
    print("index:", info)
    avatar_url = info['photo_400_orig']
    firstname = info['first_name']
    lastname = info['last_name']
    if deleted:
        tmp_id = dora_id
    return render_template('index.html', lastname=lastname, status=status["text"], 
                            deleted = deleted, firstname = firstname,
                           avatar_url = avatar_url, user_id=user_id, finded=finded, private=private)
    
    
@app.route('/stats', methods=['POST', 'GET'])
def stats():
    user_id = tmp_id
    info = get_info_about_user(user_id)[0]
    friends = get_list_friends(user_id)
    gifts = get_gifts_list(user_id)
    print(gifts)
    count_friends = len(friends)
    screen_name = info['screen_name']
    print("Stats info:", info, "ID:", screen_name)
    bdate = info['bdate']
    verified = info['verified']
    firstname = info['first_name']
    lastname = info['last_name']
    request.form.get('id')
    return render_template('stats.html', firstname = firstname, lastname=lastname, 
                           count_friends=count_friends, verified=verified, screen_name=screen_name,
                           gifts=gifts, bdate=bdate)

def get_gifts_list(user_id):
    try:
        all_gifts = session.method("gifts.get", {"user_id": user_id})
        gifts = all_gifts['count']
    except:
        gifts = 0
    return gifts


def get_list_friends(user_id):
    friends = session.method("friends.get", {"user_id": user_id})
    return friends['items']
    
    
def get_user_status(user_id):
    try:
        status = session.method("status.get", {"user_id": user_id})
    except:
        status = {"text": "DELETED"}
    return status
    
    
def get_info_about_user(user_id):
    info = session.method("users.get", {"user_ids": user_id, "fields": "photo_400_orig, verified, screen_name, is_closed, bdate"})
    return info


def get_photos_with_user(user_id):
    tagged_photo = session.method("photos.getUserPhotos", {"user_id": user_id})
    return tagged_photo


if (__name__ == '__main__'):
    app.run()