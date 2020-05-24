(this['webpackJsonpgoit-react-hw-02-phonebook'] =
  this['webpackJsonpgoit-react-hw-02-phonebook'] || []).push([
  [0],
  {
    11: function (e, a, t) {
      e.exports = {
        ImageGalleryItem: 'ImageGalleryItem_ImageGalleryItem__3AIjF',
        ImageGalleryItemImage: 'ImageGalleryItem_ImageGalleryItemImage__60XK-',
      };
    },
    12: function (e, a, t) {
      e.exports = {
        Overlay: 'Modal_Overlay__ln64V',
        Modal: 'Modal_Modal__2zgSq',
      };
    },
    26: function (e, a, t) {
      e.exports = { App: 'App_App__3SAy6' };
    },
    30: function (e, a, t) {
      e.exports = { ImagesGallery: 'ImageGallery_ImagesGallery__x-_pI' };
    },
    31: function (e, a, t) {
      e.exports = { btn: 'Button_btn__1fa38' };
    },
    32: function (e, a, t) {
      e.exports = t(59);
    },
    59: function (e, a, t) {
      'use strict';
      t.r(a);
      var n = t(0),
        r = t.n(n),
        o = t(25),
        c = t.n(o),
        l = t(13),
        s = t(2),
        i = t(3),
        m = t(5),
        u = t(4),
        g = t(26),
        h = t(7),
        p = t.n(h),
        d = t(10),
        f = t(9);
      function b() {
        var e = Object(d.a)(['\n  display: block;\n  margin: 0 auto;\n']);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function y() {
        var e = Object(d.a)(['\n  display: block;\n  margin: 100px auto;\n']);
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      var v = Object(f.css)(y()),
        I = Object(f.css)(b()),
        S = t(28),
        _ = t.n(S),
        O = '&key=15725312-965e6abfe89225a1afd144b44',
        E = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '',
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1;
          return _.a.get(
            ''
              .concat('https://pixabay.com/api/', '?q=')
              .concat(e, '&page=')
              .concat(a)
              .concat(
                O,
                '&image_type=photo&orientation=horizontal&per_page=12',
              ),
          );
        },
        L = t(8),
        k =
          (t(23),
          t(24),
          function (e) {
            0 === e.length &&
              Object(L.error)({
                text: 'No results were found for your request.',
              });
          }),
        j = t(29),
        M = t(6),
        w = (function (e) {
          Object(m.a)(t, e);
          var a = Object(u.a)(t);
          function t() {
            var e;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((e = a.call.apply(a, [this].concat(r))).state = { query: '' }),
              (e.handleChange = function (a) {
                var t = a.target,
                  n = t.name,
                  r = t.value;
                e.setState(Object(j.a)({}, n, r));
              }),
              (e.handleSubmit = function (a) {
                a.preventDefault(),
                  e.state.query.length <= 1
                    ? Object(L.error)({ text: 'Enter more information' })
                    : (e.props.onSubmit(e.state.query),
                      e.setState({ query: '' }));
              }),
              e
            );
          }
          return (
            Object(i.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.query;
                  return r.a.createElement(
                    'header',
                    { className: M.Searchbar },
                    r.a.createElement(
                      'form',
                      { className: M.SearchForm, onSubmit: this.handleSubmit },
                      r.a.createElement(
                        'button',
                        { type: 'submit', className: M.SearchFormBtn },
                        r.a.createElement(
                          'span',
                          { className: M.SearchFormBtnLabel },
                          'Search',
                        ),
                      ),
                      r.a.createElement('input', {
                        className: M.SearchFormInput,
                        type: 'text',
                        autoComplete: 'off',
                        autoFocus: !0,
                        name: 'query',
                        value: e,
                        onChange: this.handleChange,
                        placeholder: 'Search images and photos',
                      }),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        C = t(11),
        F = function (e) {
          var a = e.webformatURL,
            t = e.tags,
            n = e.onOpenModal;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'li',
              { className: C.ImageGaleryItem },
              r.a.createElement('img', {
                src: a,
                alt: t,
                className: C.ImageGalleryItemImage,
                onClick: n,
              }),
            ),
          );
        },
        R = t(30),
        G = function (e) {
          var a = e.images,
            t = e.onOpenModal;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'ul',
              { className: R.ImagesGallery },
              a.map(function (e) {
                return r.a.createElement(
                  F,
                  Object.assign({ key: e.id }, e, {
                    onOpenModal: function () {
                      return t(e.largeImageURL, e.tags);
                    },
                  }),
                );
              }),
            ),
          );
        },
        N = t(12),
        U = (function (e) {
          Object(m.a)(t, e);
          var a = Object(u.a)(t);
          function t() {
            var e;
            Object(s.a)(this, t);
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++)
              o[c] = arguments[c];
            return (
              ((e = a.call.apply(a, [this].concat(o))).backdropRef = Object(
                n.createRef,
              )()),
              (e.handleKeyPress = function (a) {
                'Escape' === a.code && e.props.onCloseModal();
              }),
              (e.handleBackdropClick = function (a) {
                var t = e.backdropRef.current;
                (t && a.target !== t) || e.props.onCloseModal();
              }),
              e
            );
          }
          return (
            Object(i.a)(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  window.addEventListener('keydown', this.handleKeyPress);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  window.removeEventListener('keydown', this.handleKeyPress);
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    a = e.largeImageURL,
                    t = e.tags;
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    r.a.createElement(
                      'div',
                      {
                        className: N.Overlay,
                        ref: this.backdropRef,
                        onClick: this.handleBackdropClick,
                      },
                      r.a.createElement(
                        'div',
                        { className: N.Modall },
                        r.a.createElement('img', { src: a, alt: t }),
                      ),
                    ),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        x = function (e) {
          return e.map(function (e) {
            return {
              id: e.id,
              webformatURL: e.webformatURL,
              largeImageURL: e.largeImageURL,
              tags: e.tags,
            };
          });
        },
        q = t(31),
        A = function (e) {
          var a = e.onClick,
            t = e.isLoading;
          return r.a.createElement(
            'div',
            null,
            r.a.createElement(
              'button',
              { className: q.btn, type: 'submit', onClick: a },
              t
                ? r.a.createElement(p.a, { css: I, size: 18, color: '#fff' })
                : 'Load more...',
            ),
          );
        },
        B = (function (e) {
          Object(m.a)(t, e);
          var a = Object(u.a)(t);
          function t() {
            var e;
            Object(s.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((e = a.call.apply(a, [this].concat(r))).state = {
                images: [],
                page: 1,
                largeImageURL: '',
                tags: '',
                isLoading: !1,
                isModalOpen: !1,
                error: null,
              }),
              (e.fetchImagesAPI = function (a) {
                e.setState({ isLoading: !0 }),
                  E(a)
                    .then(function (t) {
                      var n = t.data;
                      e.setState({ images: x(n.hits), query: a }), k(n.hits);
                    })
                    .catch(function (a) {
                      return e.setState({ error: a });
                    })
                    .finally(function () {
                      return e.setState({ isLoading: !1 });
                    });
              }),
              (e.handleLoadMore = function (a) {
                e.setState({ isLoading: !0 }),
                  setTimeout(function () {
                    window.scrollTo({
                      top: document.documentElement.scrollHeight,
                      behavior: 'smooth',
                    });
                  }, 1500),
                  E(e.state.query, e.state.page + 1)
                    .then(function (a) {
                      var t = a.data;
                      e.setState(function (e) {
                        return {
                          images: [].concat(
                            Object(l.a)(e.images),
                            Object(l.a)(x(t.hits)),
                          ),
                          page: e.page + 1,
                        };
                      });
                    })
                    .catch(function (a) {
                      return e.setState({ error: a });
                    })
                    .finally(function () {
                      return e.setState({ isLoading: !1 });
                    });
              }),
              (e.openModal = function (a, t) {
                return e.setState({
                  isModalOpen: !0,
                  largeImageURL: a,
                  tags: t,
                });
              }),
              (e.closeModal = function () {
                return e.setState({ isModalOpen: !1, largeImageURL: '' });
              }),
              e
            );
          }
          return (
            Object(i.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.state,
                    a = e.images,
                    t = e.isLoading,
                    n = e.isModalOpen,
                    o = e.largeImageURL,
                    c = e.tags;
                  return r.a.createElement(
                    'div',
                    { className: g.App },
                    r.a.createElement(w, { onSubmit: this.fetchImagesAPI }),
                    t &&
                      r.a.createElement(p.a, {
                        css: v,
                        size: 100,
                        color: '#000',
                      }),
                    !!a.length &&
                      r.a.createElement(G, {
                        images: a,
                        onOpenModal: this.openModal,
                      }),
                    !!a.length &&
                      r.a.createElement(A, {
                        onClick: this.handleLoadMore,
                        isLoading: t,
                      }),
                    n &&
                      r.a.createElement(U, {
                        largeImageURL: o,
                        tags: c,
                        onCloseModal: this.closeModal,
                      }),
                  );
                },
              },
            ]),
            t
          );
        })(n.Component);
      c.a.render(r.a.createElement(B, null), document.getElementById('root'));
    },
    6: function (e, a, t) {
      e.exports = {
        Searchbar: 'Searchbar_Searchbar__3ipNL',
        SearchForm: 'Searchbar_SearchForm__2hUjV',
        SearchFormBtn: 'Searchbar_SearchFormBtn__3HGbh',
        SearchFormBtnLabel: 'Searchbar_SearchFormBtnLabel__3GTXK',
        SearchFormInput: 'Searchbar_SearchFormInput__2SLM1',
      };
    },
  },
  [[32, 1, 2]],
]);
//# sourceMappingURL=main.c380bc31.chunk.js.map
