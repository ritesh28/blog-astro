---
title: "Comprehensive Guide to Using Streamlit with Python"
pubDate: 2022-06-08
imageURL: "/content-image/streamlit.webp"
tags: ["streamlit", "front-end", "data-science", "python"]
slug: comprehensive-guide-to-using-streamlit-with-python
---

# Comprehensive Guide to Using Streamlit with Python

Streamlit is an open-source framework that allows you to create interactive, data-driven web applications with minimal effort. It enables Python developers to build web apps for machine learning and data science without needing to learn HTML, CSS, or JavaScript. In this blog, we will go through a step-by-step guide on how to use Streamlit, from installation to building a simple app. Additionally, we'll include some troubleshooting tips to help you resolve common issues that you might face.

## What is Streamlit?

Streamlit is a Python library that makes it easy to create beautiful and interactive web apps with minimal effort. With just a few lines of Python code, you can turn data analysis scripts into fully functional applications. It is perfect for data scientists, machine learning engineers, and anyone working with data who wants to showcase their work quickly and interactively.

## Getting Started

### Step 1: Install Streamlit

To get started with Streamlit, the first thing you need to do is install it. You can do this using `pip`:

```bash
pip install streamlit
```

This will install Streamlit and all its dependencies.

### Step 2: Create a Simple App

Once you have Streamlit installed, you can start building your first app. Let’s begin by creating a simple Python script that displays a title and a plot.

1. Open a new Python file, for example `app.py`.
2. Write the following code:

```python
import streamlit as st
import numpy as np
import matplotlib.pyplot as plt

# Add a title
st.title('Simple Streamlit App')

# Create some random data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Display the plot
plt.plot(x, y)
st.pyplot(plt)
```

3. Save the file.

### Step 3: Run the App

To run the app, navigate to the directory where your `app.py` file is located in the terminal and execute the following command:

```bash
streamlit run app.py
```

Streamlit will start a local development server and open the app in your default web browser. By default, the app will be available at `http://localhost:8501`.

## Adding More Interactivity

Streamlit allows you to add interactive widgets like sliders, buttons, and text input fields to your app. These widgets can update the app's behavior dynamically without needing to reload the page.

Here is an example of adding a slider to control the frequency of the sine wave in the plot:

```python
import streamlit as st
import numpy as np
import matplotlib.pyplot as plt

# Add a title
st.title('Interactive Sine Wave')

# Slider for frequency
freq = st.slider('Frequency', 1, 10, 3)

# Create sine wave with selected frequency
x = np.linspace(0, 10, 100)
y = np.sin(freq * x)

# Display the plot
plt.plot(x, y)
st.pyplot(plt)
```

In this example:

- We added a slider using `st.slider()`, where the user can choose the frequency of the sine wave between 1 and 10.
- The `freq` variable is used to dynamically adjust the frequency of the sine wave.

## Deploying the App

Once you have created your Streamlit app, you may want to share it with others. You can deploy your app on the cloud using Streamlit Cloud or any other platform like Heroku.

### Deploying on Streamlit Cloud

Streamlit offers a cloud service where you can easily deploy your app. Follow these steps to deploy:

1. Sign up for Streamlit Cloud at [Streamlit Cloud](https://streamlit.io/cloud).
2. Connect your GitHub account and create a new app by selecting a repository that contains your Streamlit app.
3. The app will be automatically deployed, and you will be given a URL to share.

### Deploying on Heroku

1. Install the Heroku CLI on your machine.

2. Create a `Procfile` in your project directory with the following content:

   ```bash
   web: streamlit run app.py
   ```

3. Commit the changes and push your project to GitHub.

4. In your Heroku dashboard, create a new app and link it to your GitHub repository.

5. Deploy the app, and it will be available on a public URL.

## Troubleshooting Common Issues

While working with Streamlit, you may encounter some issues. Below are some common problems and their solutions:

### 1. **App is Not Loading or Freezes**

- **Cause:** This issue often occurs when the app is taking too long to run or there’s a bottleneck in the code (e.g., a long-running operation like downloading large data).

- **Solution:**

  - Use `st.spinner()` to show a loading animation while the app is processing.
  - Break long-running tasks into smaller chunks.
  - For large datasets, consider using caching with `@st.cache` to speed up the process.

### 2. **`ModuleNotFoundError` for Streamlit**

- **Cause:** This occurs if Streamlit is not installed correctly or if you are using a virtual environment where Streamlit is not available.

- **Solution:**

  - Ensure Streamlit is installed in the current environment by running `pip install streamlit`.
  - If you're using a virtual environment, make sure it’s activated before running the app.

### 3. **App Not Refreshing After Changes**

- **Cause:** Streamlit automatically reruns the app when you make changes to the script, but sometimes it doesn't detect changes properly.

- **Solution:**

  - Press **R** in the browser window to manually refresh the app.
  - You can also restart the Streamlit server by stopping it with `Ctrl+C` and running `streamlit run app.py` again.

### 4. **File Upload Issues**

- **Cause:** When uploading large files, Streamlit may struggle with memory limitations or slow uploads.

- **Solution:**

  - Consider compressing the files before uploading.
  - Use `st.file_uploader()` efficiently by limiting the file size with the `max_size` parameter.

Example:

```python
uploaded_file = st.file_uploader("Choose a file", type="csv", max_size=2000000)
```

### 5. **Streamlit Not Detecting Dependencies**

- **Cause:** If you're using external libraries or custom modules that are not installed in your environment, Streamlit will raise an error when trying to run the app.

- **Solution:**

  - Ensure all dependencies are installed via `pip install` or added to a `requirements.txt` file.
  - Run `pip install -r requirements.txt` to install all the dependencies before running the app.

## Conclusion

Streamlit is a powerful tool for rapidly building interactive web applications with Python. With just a few lines of code, you can turn your data analysis into a fully interactive web app. Whether you're creating simple data visualizations or complex machine learning models, Streamlit can help you showcase your work in an intuitive way.

By following this guide, you should now have a basic understanding of how to get started with Streamlit, add interactivity, deploy your app, and troubleshoot common issues.

Streamlit is constantly evolving, so be sure to check the [official documentation](https://docs.streamlit.io/) for updates and new features.
