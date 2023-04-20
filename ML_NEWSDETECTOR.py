import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.metrics import classification_report
import re 
import string
import joblib

data_fake=pd.read_csv("Fake.csv")
data_true=pd.read_csv("True.csv")

# data_fake.head()
# data_true.tail()

data_fake["class"]=0
data_true['class']=1
data_fake.shape,data_true.shape

data_fake_manual_testing=data_fake.tail(10)
for i in range(23480,23470,-1):
    data_fake.drop([i],axis=0,inplace=True)

data_true_manual_testing=data_fake.tail(10)
for i in range(21416,21406,-1):
    data_true.drop([i],axis=0,inplace=True)

data_fake.shape,data_true.shape

data_fake_manual_testing['class']=0
data_true_manual_testing['class']=1

data_fake_manual_testing.head()
data_true_manual_testing.head()

data_merge=pd.concat([data_fake,data_true],axis=0)
data_merge.head()

data_merge.columns
data=data_merge.drop(['title','subject','date'],axis=1)
data.isnull().sum()
data=data.sample(frac=1)
# print(data.head())
data.reset_index(inplace=True)
data.drop(['index'],axis=1,inplace=True)

# data.columns

# data.head()

def wordopt(text):
    text=text.lower()
    text=re.sub('\[.*?\]','',text)
    text=re.sub("\\W"," ",text)
    text=re.sub('https?://\S+|www.\.\S+','',text)
    text=re.sub('<.*?>+','',text)
    text=re.sub('[%s]'% re.escape(string.punctuation),'',text)
    text=re.sub('\n','',text)
    text=re.sub('\w*\d\w*','',text)
    return text

data['text']=data['text'].apply(wordopt)
x=data['text']
y=data['class']

x_train, x_test,y_train,y_test=train_test_split(x,y,test_size=0.25)

from sklearn.feature_extraction.text import TfidfVectorizer
vectorization=TfidfVectorizer()
xv_train=vectorization.fit_transform(x_train)
xv_test=vectorization.transform(x_test)
joblib.dump(vectorization, 'vectorizer.pkl')

# from sklearn.linear_model import LogisticRegression

# #when using NEW DATA
# LR=LogisticRegression()
# LR.fit(xv_train, y_train)
# joblib.dump(LR, 'mod_1.pkl')
# pred_lr=LR.predict(xv_test)



# LR.score(xv_test,y_test)
# # print(LR.score(xv_test,y_test))
# print(classification_report(y_test,pred_lr))

# from sklearn.tree import DecisionTreeClassifier

# #WHEN USING NEW DATA
# DT=DecisionTreeClassifier()
# DT.fit(xv_train, y_train)
# pred_dt=DT.predict(xv_test)
# joblib.dump(DT, 'mod_2.pkl')
# DT.score(xv_test,y_test)
# print(classification_report(y_test,pred_dt))



# from sklearn.ensemble import GradientBoostingClassifier

# GB=GradientBoostingClassifier(random_state=0)
# GB.fit(xv_train,y_train)
# joblib.dump(GB, 'mod_3.pkl')

# predict_gb=GB.predict(xv_test)
# GB.score(xv_test,y_test)

from sklearn.ensemble import RandomForestClassifier
RF=RandomForestClassifier(random_state=0)
RF.fit(xv_train,y_train)
joblib.dump(RF, 'mod_4.pkl')
pred_rf=RF.predict(xv_test)
RF.score(xv_test,y_test)
print(classification_report(y_test,pred_rf))

def out_label(n):
    if n==0: 
        return "FAKE NEWS"
    else : 
        return "IT IS NOT A REAL NEWS"

def manual_testing(news):
    testing_news={"text":[news]}
    new_def_test=pd.DataFrame(testing_news)
    new_def_test['text']=new_def_test['text'].apply(wordopt)
    new_x_test=new_def_test["text"]
    new_xv_test=vectorization.transform(new_x_test)
    # pred_LR=LR.predict(new_xv_test)
    # pred_DT=DT.predict(new_xv_test)
    # pred_GB=GB.predict(new_xv_test)
    pred_RF=RF.predict(new_xv_test)
    return  print("\n\n RF: {}\n".format(out_label(pred_RF[0])))


news="US supreme court supports abortion laws"
manual_testing(news)    
    






