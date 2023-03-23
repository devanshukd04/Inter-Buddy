from flask import Flask,render_template,Response,request
from flask_cors import CORS
from werkzeug.utils import secure_filename
import statistics as st

import cv2
import numpy as np
import matplotlib.pyplot as plt
# import required libraries
# import sounddevice as sd
# import wavio as wv
import os 
import shutil

app=Flask(__name__)
CORS(app)




@app.route('/')
def index():
    return render_template('index.html')

@app.route('/home')
def home():
    return render_template('index1.html')

@app.route('/predict')
def predict():
    return render_template('index1.html')


def gen_frames(): 
    count = 0
    camera = cv2.VideoCapture(0)


    GR_dict={1:(0,255,0),0:(0,0,255)}

    while True:
        f1 = open("face_result.txt", "a")
        f2 = open("speech_result.txt", "a")
        success, frame = camera.read()  # read the camera frame
        if not success:
            break
        else:
            face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
            faces = face_cascade.detectMultiScale(frame,1.05,5)
            
            for x,y,w,h in faces:
                face_img = frame[y:y+h,x:x+w ]
        #       resized = np.array(face_img,target_size=(128,128))

                resized = cv2.resize(face_img,(48,48))
                resized = np.array(tf.image.rgb_to_grayscale(resized,name = None)/255)
                reshaped=resized.reshape(1, 48, 48, 1)
                # a=model.predict(X_test[i].reshape(1,48,48,1))
                # print("Predicted:",dict[np.argmax(a)]," Actual:",dict[np.argmax(y_test[i])])
                
        #         label = np.argmax(result,axis=1)[0]
                
                cv2.rectangle(frame,(x,y),(x+w,y+h),GR_dict[1],2)
                cv2.rectangle(frame,(x,y-40),(x+w,y),GR_dict[1],-1)
                cv2.putText(frame, "Hello",(x, y-10),cv2.FONT_HERSHEY_SIMPLEX,0.8,(255,255,255),2)
                

                # Sampling frequency
                freq = 44100

                # Recording duration
                duration = 1

                # Start recorder with the given values 
                # of duration and sample frequency
                # recording = sd.rec(int(duration * freq), 
                #                 samplerate=freq, channels=1)

                # # Record audio for the given number of seconds
                # sd.wait()


                # Convert the NumPy array to audio file
                # filename = "songs/recording"+str(count)+".wav"
                # wv.write(filename, recording, freq, sampwidth=2)
                
                # feature = extract_mfcc(filename)
                
                # feature = np.array([feature])
                # feature = feature.reshape(1, 40, 1)
                # f2.write("\n")
                
                # count += 1
                
                # cv2.putText(frame,  (50,50),cv2.FONT_HERSHEY_SIMPLEX,0.8,(0,0,0))

            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
           

            key = cv2.waitKey(1)
            if key == 27: 
                break
          
                
                
        yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

        f1.close()
        f2.close()
    
    camera.release()
    cv2.destroyAllWindows()

@app.route('/camera')
def camera():
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')




if __name__=='__main__':
    app.run(debug=True, port=5000)