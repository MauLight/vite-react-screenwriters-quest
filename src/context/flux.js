const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      dramatic_basis: {
        concept: "In a general sense, what do you want to talk about? What is the source of inspiration behind your need to write? Those images in your mind, sum them up into a phrase.",
        community_value: "How your point of view can solve a global, territorial, target group, etc. problem. Appealing to broader audiences.",
        myth: "Discourse created by a series of symbols (images, scenes, sequences, etc.) that recursively signify and become its own symbol system, a global symbol. (High concept + Community value).",
        theme: "The symbolic argument between a posited truth and a lie. Generally speaking, theme is a uniform idea or subject, explored via recurring patterns and expanded through comparisons and contrast.",
        truth: "It is the side of the theme that represents the revelation the character will have about the world because of facing the story. It's called the truth because it is actually an insight into what you, as an author, think about the theme.",
        contra_positive: "The consequence of not following the truth.",
        lie: "The polar opposite to the truth statement, the lie is the initial context of affairs. The worldview of the protagonist at the beginning of the story, and it builds tension against your truth, given by the distance that you create between them.",
        flaw: "The flaw of the protagonist is the primary reason for them being in their original state at the beginning of the story and this is because of the lie they believe. In some cases, you'll find that the flaw of the protagonist is anchored in what is called a wound/ghost dynamic.",
        want: "The representation of a larger, abstract desire, manifested as a concrete goal. Comprised of desire and goal. Often it is based in the lie, because the character wants something according to their flawed view on life.",
        need: "The need of the protagonist is, in simple terms, to overcome a flaw inherent in their personality. You can think of a story as an ordeal that the protagonist needs to live through to fix this flawed trait that keeps them living in a lie-driven world.",
        self_revelation: "The self-revelation is the moment of change for the protagonist, and it's comprised of two distinctive parts; a psychological revelation or insight about who the protagonist truly is and a moral decision that becomes the final action of the protagonist.",
        fall_into_lie: "Sometimes, the power of the lie is too much for the protagonist to overcome it, in these cases, the final action is to commit to the lie because of being unable to move past it and change."
      }

    },
    actions: {
      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },

      login: async (email, password) => {
        console.log(email);
        console.log(password);
        const store = getStore();
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            "http://127.0.0.1:5000/api/token",
            opts
          );
          if (resp.status !== 200) {
            alert("Incorrect email or password");
            return false;
          }

          const data = await resp.json();
          console.log(data);
          console.log(data.user_id);
          console.log("access_token: " + data.token);
          sessionStorage.setItem("token", data.token);
          setStore({ token: data.token, user_id: data.user_id });
          console.log(store.user_id);
          return true;
        } catch (error) {
          console.error("There was an error in your request");
        }
      },

      logout: () => {
        sessionStorage.removeItem("token");
        console.log("logged out!");
        setStore({ token: null });
      },

      setScriptId: (id) => {
        setStore({ scriptId: id });
        console.log(id);
      },

      hasScripts: () => {
        setStore({ hasScripts: false });
      },

      getMessage: async () => {
        const store = getStore();
        const opts = {
          headers: {
            Authorization: "Bearer " + store.token,
          },
        };

        fetch(
          "http://127.0.0.1:5000/api/hello",
          opts
        )
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },

      getUsers: async () => {
        const store = getStore();
        const url = `http://127.0.0.1:5000/api/users`;
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer " + store.token,
          },
        }
        try {
          const response = await fetch(url, opts);
          const data = await response.json();
          console.log(data);
          setStore({ allUsers: data });
          console.log(store.allUsers);
        }
        catch (error) {
          console.log(error);
        }
      },

      getUserandScripts: async () => {
        const store = getStore();
        console.log(store.user_id);
        const url = `http://127.0.0.1:5000/api/user/${store.user_id}`;
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: "Bearer " + store.token,
          },
        }
        try {
          const response = await fetch(url, opts);
          const data = await response.json();
          console.log(data)
          setStore({ user: data })
          console.log(store.user);
          setStore({ userScripts: data.myscripts })
          setStore({ user_id: data.id })
        }
        catch (error) {
          console.log(error);
        }
      },

      getCredentials: async () => {
        const store = getStore();
        console.log(store.token);
        const opts = {
          headers: {
            Authorization: "Bearer " + store.token,
          },
        };

        fetch(
          "http://127.0.0.1:5000/api/user",
          opts
        )
          .then((resp) => resp.json())
          .then((data) => setStore({ credentials: data.user }))

          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
        console.log(store.credentials);
      },
    },
  };
};

export default getState;
